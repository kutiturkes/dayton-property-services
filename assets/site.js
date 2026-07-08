(function () {
  const config = window.DPS_CONFIG || {};
  const phoneHref = config.phoneHref || "+18122593490";
  const phoneDisplay = config.phoneDisplay || "(812) 259-3490";
  const email = config.email || "info@daytonpropertyservice.com";
  const smsHref = "sms:" + phoneHref;
  const telHref = "tel:" + phoneHref;

  document.querySelectorAll("[data-business-name]").forEach((el) => {
    el.textContent = config.businessName || "Dayton Property Services";
  });

  document.querySelectorAll("[data-phone]").forEach((el) => {
    el.textContent = phoneDisplay;
  });

  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.href = telHref;
  });

  document.querySelectorAll("[data-sms-link]").forEach((el) => {
    el.href = smsHref;
  });

  document.querySelectorAll("[data-email]").forEach((el) => {
    el.textContent = email;
  });

  document.querySelectorAll("[data-email-link]").forEach((el) => {
    el.href = "mailto:" + email;
  });

  document.querySelectorAll("[data-area-list]").forEach((list) => {
    list.innerHTML = "";
    (config.serviceAreas || []).forEach((area) => {
      const item = document.createElement("li");
      item.textContent = area;
      list.appendChild(item);
    });
  });

  document.querySelectorAll("form[data-contact-form]").forEach((form) => {
    form.action = "mailto:" + email;
    form.method = "post";
    form.enctype = "multipart/form-data";
  });
})();
