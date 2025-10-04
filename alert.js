function Error() {
  Swal.fire({
    icon: "error",
    title: "Hola te hemos hackeado",
    html: "<p>Ya valiste</p>",
  });
}
/*
  Multi-login practice JS
  - Reemplaza TU_LINK_FACEBOOK y TU_LINK_GOOGLE por tus URLs o endpoints reales.
  - Para OAuth real, usa redirect URIs registrados y valida 'state' en el backend.
*/

(function () {
  // --- CONFIG: cambia estos con tus links reales ---
  const FB_LINK = "TU_LINK_FACEBOOK"; // ejemplo: https://tudominio.com/auth/facebook/start
  const GOOGLE_LINK = "TU_LINK_GOOGLE"; // ejemplo: https://tudominio.com/auth/google/start
  const INST_LINK = "TU_LINK_INST"; // ejemplo: https://tudominio.com/auth/institution/start
  // ------------------------------------------------

  // util: abrir enlace seguro (para evitar manipulación)
  function openExternal(url) {
    // seguridad: solo abrir URLs absolutas que comiencen por http(s)
    try {
      const u = new URL(url, window.location.href);
      if (u.protocol === "http:" || u.protocol === "https:") {
        // si quieres abrir en nueva pestaña: use noopener
        window.open(u.href, "_blank", "noopener,noreferrer");
      } else {
        console.warn("URL no segura:", url);
      }
    } catch (e) {
      console.warn("URL inválida:", url);
    }
  }

  // Facebook
  document.getElementById("btn-fb").addEventListener("click", function (e) {
    e.preventDefault();
    if (!FB_LINK || FB_LINK.includes("TU_LINK")) {
      // Si no has reemplazado, abrir ejemplo local o alerta instructiva
      alert(
        "Reemplaza FB_LINK en el código con tu URL de prueba.\n(Ej: https://tu-dominio.com/auth/facebook/start)"
      );
      return;
    }
    openExternal(FB_LINK);
  });

  // Google
  document.getElementById("btn-google").addEventListener("click", function (e) {
    e.preventDefault();
    if (!GOOGLE_LINK || GOOGLE_LINK.includes("TU_LINK")) {
      alert("Reemplaza GOOGLE_LINK en el código con tu URL de prueba.");
      return;
    }
    openExternal(GOOGLE_LINK);
  });

  // Institutional login
  document.getElementById("btn-inst").addEventListener("click", function (e) {
    e.preventDefault();
    if (!INST_LINK || INST_LINK.includes("TU_LINK")) {
      alert("Reemplaza INST_LINK en el código con tu URL de prueba.");
      return;
    }
    openExternal(INST_LINK);
  });

  // Guest
  document.getElementById("btn-guest").addEventListener("click", function (e) {
    e.preventDefault();
    // Simular creación de sesión de invitado (práctica)
    const nick = prompt(
      "Nombre de usuario para sesión de invitado (opcional):",
      "Invitado"
    );
    const user = nick ? nick.trim() : "Invitado";
    // Acción real: redirigir a /guest?name=...
    alert(
      "Sesión de invitado iniciada como: " +
        user +
        "\n(En práctica, aquí crearías sesión y redirigirías al dashboard.)"
    );
    // Ejemplo de redirección de práctica:
    // location.href = '/dashboard?guest=' + encodeURIComponent(user);
  });

  // Email/password form handling (práctica)
  const form = document.getElementById("emailForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = form.email.value.trim();
    const pass = form.password.value;
    // validaciones básicas
    if (!email || !pass) {
      alert("Por favor completa correo y contraseña.");
      return;
    }
    if (pass.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres (práctica).");
      return;
    }

    // Simulación: enviar datos al backend via fetch (aquí se muestra cómo sería)
    // RECUERDA: en práctica no envíes contraseñas reales a endpoints no seguros.
    const payload = { email, password: pass };
    // Simular petición:
    console.log("Enviando credenciales de prueba:", payload);
    alert("Simulación: credenciales enviadas al servidor (mira consola).");

    // Si tuvieras un endpoint real:
    // fetch('/auth/email/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    //  .then(r=>r.json()).then(data=>{/* manejar respuesta /}).catch(err=>{/ manejar error */});
  });

  // Accessibility: keyboard shortcut "L" para foco en login (solo en práctica)
  window.addEventListener("keydown", function (ev) {
    if (ev.key.toLowerCase() === "l" && !ev.metaKey && !ev.ctrlKey) {
      ev.preventDefault();
      document.getElementById("email").focus();
    }
  });
})();
