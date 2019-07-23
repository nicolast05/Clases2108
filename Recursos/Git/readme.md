# Git: Comandos básicos

## Clonación de repositorio remoto

```
git clone <url del repositorio remoto>
```

## Creación de rama

```
git branch <nombre de la rama>
```

## Creación y cambio de rama

```
git checkout <nombre de la rama>
```

## Seguimiento de cambios

```
git add .
```

## Preparación de archivos

```
git commit -m "algún texto que indique lo que se ha hecho"
```

## Llevar los archivos al repositorio remoto

```
git push origin <nombre de la rama>
```

## Configuración de identidad global

```
git config --global user.name "poner su nombre"
git config --global user.email "poner su correo"
```

## Configuración de identidad local

```
git config user.name "poner su nombre"
git config user.email "poner su correo"
```

## Setear el Visual Studio Code como editor por defecto

```
git config --global core.editor "code --wait"
```

## Abrir la configuración en el Visual Studio Code

```
git config --global -e
```
