$(document).ready(function () {
  var inicio = $("#inicio").offset().top,
    quienes = $("#quienes").offset().top,
    eligen = $("#eligen").offset().top,
    contacto = $("#contacto").offset().top;

  $("#btn-inicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: inicio - 100,
      },
      500
    );
  });

  $("#btn-quienes").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: quienes - 100,
      },
      500
    );
  });

  $("#btn-eligen").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: eligen - 100,
      },
      500
    );
  });

  $("#btn-contacto").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: contacto - 100,
      },
      500
    );
  });

  $("#btn-contacto2").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: inicio - 100,
      },
      500
    );
  });

  $("#btn-iniciox").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: inicio,
      },
      500
    );
  });

  $("#btn-quienesx").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: quienes,
      },
      500
    );
  });

  $("#btn-eligenx").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: eligen,
      },
      500
    );
  });

  $("#btn-contactox").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: contacto,
      },
      500
    );
  });

  // ------ funcionamiento del formulario

  const name = document.getElementById("name");
  const name2 = document.getElementById("name2");
  const phone = document.getElementById("phone");
  const phone2 = document.getElementById("phone2");
  const email = document.getElementById("email");
  const email2 = document.getElementById("email2");
  const message = document.getElementById("message");
  const message2 = document.getElementById("message2");

  document
    .getElementById("sendMailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const serviceID = "default_service";
      const templateID = "template_84wdq6p";

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Consulta enviada correctamente",
          });
          name.value = "";
          phone.value = "";
          email.value = "";
          message.value = "";
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    });

  document
    .getElementById("sendMailForm2")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const serviceID = "default_service";
      const templateID = "template_84wdq6p";

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Consulta enviada correctamente",
          });
          name2.value = "";
          phone2.value = "";
          email2.value = "";
          message2.value = "";
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    });
});
