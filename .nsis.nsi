!include "MUI2.nsh"

SetCompressor LZMA

!define MUI_ICON "app/public/imagens/favicon.ico"
!define MUI_UNICON "app/public/imagens/favicon.ico"

!define MUI_ABORTWARNING

!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_COMPONENTS
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES

!insertmacro MUI_LANGUAGE "PortugueseBR"

Name "HelpDesk"
OutFile "HelpDesk-Setup.exe"

ShowInstDetails nevershow
ShowUninstDetails nevershow
BrandingText "Sardo"

Page directory
Page instfiles

UninstPage uninstConfirm
UninstPage instfiles

Section "Install"
  SetDetailsPrint none

  ExecWait '$INSTDIR\nssm.exe stop helpdesk'
  ExecWait '$INSTDIR\nssm.exe remove helpdesk confirm'

  SetOutPath $INSTDIR
  File helpdesk.exe
  File nssm.exe

  WriteUninstaller $INSTDIR\Uninstaller.exe

  ExecWait '$INSTDIR\nssm.exe install helpdesk "$INSTDIR\helpdesk.exe"'
  ExecWait '$INSTDIR\nssm.exe set helpdesk Description "Servidor web do HelpDesk"'
  ExecWait '$INSTDIR\nssm.exe set helpdesk DisplayName "HelpDesk - Sardo"'
  ExecWait '$INSTDIR\nssm.exe set helpdesk Start SERVICE_DELAYED_AUTO_START'
  ExecWait '$INSTDIR\nssm.exe set helpdesk AppStdout "$INSTDIR\helpdesk.log"'
  ExecWait '$INSTDIR\nssm.exe set helpdesk AppStderr "$INSTDIR\helpdesk.log"'
  ExecWait '$INSTDIR\nssm.exe start helpdesk'

  ExecShell "open" "http://localhost:9191/admin/"

  Quit
SectionEnd

Section "Uninstall"
  SetDetailsPrint none

  Delete $INSTDIR\Uninstaller.exe

  ExecWait '$INSTDIR\nssm.exe stop helpdesk'
  ExecWait '$INSTDIR\nssm.exe remove helpdesk confirm'

  Delete $INSTDIR\helpdesk.exe
  Delete $INSTDIR\nssm.exe
SectionEnd
