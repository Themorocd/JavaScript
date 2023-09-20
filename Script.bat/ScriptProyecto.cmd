@echo off
: inicio
color 20
set var = 0;
cls

echo ==================================
echo =                                =
echo =        Bienvenido al           =
echo =            Menu                =
echo =                                =
echo ==================================
echo %DATE% ^| %TIME%
echo.
echo.
echo Para salir presiona una tecla para realizar una accion.
echo 1º.Abrir youtube
echo 2º.Crear una carpeta con 3 proyectos
echo 3º.Mostrar horario del curso
echo 4º.Eliminar los proyectos
echo 5º.salir

:: Para comentar ::
SET /p var=^> SELECCIONE UNA OPCION[1-5]:
if "%var%" =="0" goto inicio
if "%var%" =="1" goto ocp1
if "%var%" =="2" goto ocp2
if "%var%" =="3" goto ocp3
if "%var%" =="4" goto ocp4
if "%var%" =="5" goto exit

:ocp1
echo. Opcion 1

START https://youtube.com

pause

goto:inicio

:ocp2
echo.Opcion 2



mkdir C:\Users\Andres\git\JavaScript\Script.bat\CarpetaProyecto

pause
echo CREANDO CARPETA....

CD C:\Users\Andres\git\JavaScript\Script.bat\CarpetaProyecto

pause

echo MOVIENDO A CARPETA CREADA....
echo %DATE% ^| %TIME% > PROYECTO1.txt
echo %DATE% ^| %TIME% > PROYECTO2.txt
echo %DATE% ^| %TIME% > PROYECTO3.txt

echo CREANDO PROYECTOS...

pause

goto:inicio

:ocp3

CD C:\Users\Andres\git\JavaScript\Script.bat

START Horario2DAW.pdf

pause

goto:inicio

:ocp4

CD C:\Users\Andres\git\JavaScript\Script.bat

DEL CarpetaProyecto

pause

goto:inicio
:exit