# 📐 Set Theory App

![Frontend](https://img.shields.io/badge/frontend-React-blue)
![Backend](https://img.shields.io/badge/backend-FastAPI-yellow)

[🇬🇧 English version](README.md)

**Set Theory App** es una aplicación web interactiva que permite a los usuarios
**crear, visualizar y operar conjuntos matemáticos**. Ideal para estudiantes, docentes
o entusiastas de la teoría de conjuntos, esta app brinda una interfaz intuitiva
para explorar operaciones como unión, intersección, diferencia y más.

---

![Vista previa de la app](./assets/screenshots/preview.png)

---

## 📚 Tabla de contenido

- [¿Qué hace esta app?](#-qué-hace-esta-app)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [¿Cómo ejecutar el proyecto?](#-cómo-ejecutar-el-proyecto)
- [¿Cómo contribuir?](#-cómo-contribuir)
- [Contáctame](#-contáctame)

---

## 🧠 ¿Qué hace esta app?

Con **Set Theory App**, puedes:

- ✏️ Ingresar conjuntos personalizados (por ejemplo: A = {1, 2, 3}, B = {2, 3, 4})
- ⚙️ Realizar operaciones entre conjuntos:
  - Unión (A ∪ B)
  - Intersección (A ∩ B)
  - Diferencia (A - B)
  - Diferencia Simétrica (A Δ B)
  - Complemento (¬A)
  - Cartesiano (A × B)
  - Potencia (P(A))
- 👁️ Visualizar los resultados de manera clara y ordenada.

---

## 🧱 Tecnologías utilizadas

### 🖥️Frontend

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### ⚙️ Backend

- [Python](https://www.python.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Pydantic](https://pydantic-docs.helpmanual.io/)
- [Uvicorn](https://www.uvicorn.org/)

---

## 🚀 ¿Cómo ejecutar el proyecto?

### 🧩 Requisitos

- Node.js (v18 o superior)
- Python (v3.8 o superior)
- pip (v20 o superior)
- npm/yarn (según preferencia)

### 1. Clonar el repositorio

```bash
git clone https://github.com/blandoncj/SetTheoryApp.git
cd SetTheoryApp
```

### 2. Instalar dependencias

🔹Frontend

```bash
cd frontend
npm install # o yarn install
npm run dev # o yarn dev
```

🔹 Backend

```bash
cd backend
python -m venv env
source venv/bin/activate # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

### 3. Acceder a la aplicación

Una vez que ambos servidores estén en funcionamiento, abre tu
navegador y dirígete a:

- <http://localhost:5173> (Frontend)
- <http://localhost:8000> (Backend)

---

## 🤝 ¿Cómo contribuir?

Me encantaría recibir tus contribuciones para mejorar esta app! Sigue estos
pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`)
o fix (`git checkout -b fix/nueva-fix`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agregada nueva feature'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-feature`).
5. Abre un Pull Request en el repositorio original.

## 💬 Contáctame

Si tienes preguntas, sugerencias o simplemente quieres charlar sobre teoría de conjuntos,

- Email: <jacoboblandon94@gmail.com>
- GitHub: [blandoncj](https://githbu.com/blandoncj)
