# Actions, más allá de la CI/CD sin salir de Github

### Qué es Github Actions

Sistema de automatización de tareas basado en workflows dentro de Github. Nos permite desde interactuar con ramas, pull request, issues, hasta implementar un sistema de CI/CD para nuestro proyectos

Ha sido uno de los grandes funcionalidades introducidas en 2019. (Desde que Microsoft se hizo con el control de Github, están surgiendo nuevas muy interesantes, potenciadas muchas de ellas a través de servicios de Azure).

Todos los procesos de Github Actios se [ejecutan](https://help.github.com/en/actions/reference/virtual-environments-for-github-hosted-runners) en máquinas virtuales Standard_DS2_v2 en Microsoft Azure.

Github genera una serie de [artefactos](https://help.github.com/en/actions/getting-started-with-github-actions/core-concepts-for-github-actions#artifact) que ocupan espacio de almacenamiento en nuestra cuenta junto con todos aquellos binarios que se generen en cada uno de los procesos.

### Conceptos básicos

#### Runner

Cualquier máquina con la aplicación del `runner` de GitHub Actions instalada. Puedes usar un `runner` alojado por GitHub o alojar tu propio `runner`. Un `runner` espera los trabajos disponibles. Cuando un `runner` recoge un trabajo, ejecuta las acciones del trabajo e informa el progreso, los registros y los resultados finales a GitHub. Los `runners` ejecutan un trabajo por vez.

#### Entorno virtual

El entorno virtual de un `runner` alojado de GitHub incluye la configuración de hardware, el sistema operativo y el software instalado de la máquina virtual. [Entornos virtuales para ejecutores alojados de GitHub](https://help.github.com/es/actions/reference/virtual-environments-for-github-hosted-runners).

Cada máquina virtual tiene los mismos recursos de hardware disponibles:

- CPU de 2 núcleos
- 7 GB de memoria RAM
- 14 GB de espacio en el disco SSD

| Entorno virtual      | Etiqueta de flujo de trabajo YAML |
| -------------------- | --------------------------------- |
| Windows Server 2019  | windows-latest o windows-2019     |
| Ubuntu 18.04         | ubuntu-latest o ubuntu-18.04      |
| Ubuntu 16.04         | ubuntu-16.04                      |
| macOS Catalina 10.15 | macos-latest or macos-10.15       |

#### Workflow

Un proceso automático configurable que puedes configurar en tu repositorio para:

- elaborar,
- probar,
- empaquetar,
- lanzar o
- implementar cualquier proyecto en GitHub.

Los flujos de trabajo constan de uno o más `jobs` y se pueden programar o activar mediante `eventos`.

#### Job

Un conjunto de pasos que se ejecutan en el mismo `runner`.

- Se pueden establecer reglas de dependencia entre jobs
- Se pueden ejecutar de forma paralela o secuencial
- Si alguno de los `jobs` falla, no se ejecutarán el resto
- cada trabajo en un flujo de trabajo se ejecuta en una nueva instancia de un entorno virtual.

#### Evento

Una actividad específica que a mode de `trigger` activa el arranqueflujo de trabajo. Estoso eventos son internos de Github aunque también pueden ser externos a través de `webhooks`.

#### Paso

Un paso es una tarea individual que puede ejecutar comandos o acciones. Un trabajo configura uno o más pasos. Cada paso en un trabajo se ejecuta en el mismo `runner`, lo que permite que las acciones en ese trabajo compartan información usando el sistema de archivos.

#### Acción

Las tareas individuales que combinas como pasos para crear un `job`.

- Son el componente portable más pequeño de un flujo de trabajo.
- Se pueden crear acciones propias acciones, usar acciones compartidas de la comunidad de GitHub y personalizar las acciones públicas.
- Se incluyen como un paso más en nuestro workflow.

### Workflows

Un flujo de trabajo es un proceso automatizado configurable formado por uno o más trabajos. Debes crear un archivo YAML para definir tu configuración de flujo de trabajo.

---

URLs de interés:

- [Github Actions](https://github.com/features/actions)
- [Marketplace](https://github.com/marketplace?type=actions)
- [Conceptos básicos](https://help.github.com/es/actions/getting-started-with-github-actions/core-concepts-for-github-actions)
- [Documentación](https://help.github.com/en/actions)
- [Facturación Actions y Almacenamiento](https://help.github.com/es/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)
- [Workflows](https://help.github.com/en/actions/configuring-and-managing-workflows)
- [Eventos que desencadenan workflows](https://help.github.com/en/actions/reference/events-that-trigger-workflows)
