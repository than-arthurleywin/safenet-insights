const categoryElements = document.querySelectorAll(".category .ctr");
const city = document.getElementById("kota");
const hasilSections = document.querySelectorAll(".hasil");
const mobilenavbutton = document.getElementById("mobile-nav");
const mobilenavbox = document.getElementById("mobile-navbar");

mobilenavbutton.addEventListener("click", () => {
  if (mobilenavbox.style.display === "none") {
    mobilenavbox.style.display = "flex";
  } else {
    mobilenavbox.style.display = "none";
  }
});

function toggleHoverEffect(categoryElement, hasilSection) {
  categoryElement.classList.toggle("category-hover");
  city.style.display = "block";

  city.scrollTop = 0;
  city.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const satu = document.getElementById("satu");
  const dua = document.getElementById("dua");
  const bantuan = document.getElementById("bantuan");
  const informasi = document.getElementById("informasi");

  satu.classList.add("active");
  satu.style.color = "#ff85a2";
  dua.style.color = "black";
  bantuan.style.display = "block";

  satu.addEventListener("click", function () {
    satu.classList.add("active");
    satu.style.color = "#ff85a2";
    dua.style.color = "black";
    dua.classList.remove("active");
    bantuan.style.display = "block";
    informasi.style.display = "none";
  });

  dua.addEventListener("click", function () {
    dua.classList.add("active");
    dua.style.color = "#ff85a2";
    satu.style.color = "black";
    satu.classList.remove("active");
    informasi.style.display = "block";
    bantuan.style.display = "none";
  });
});

// bantuan
const konsultasi = document.getElementById("konsultasi");
const bantuanHukum = document.getElementById("bantuanHukum");
const konseling = document.getElementById("konseling");
const rumahAman = document.getElementById("rumahAman");
const kesehatan = document.getElementById("kesehatan");

document.addEventListener("DOMContentLoaded", function () {
  const categoryElements = document.querySelectorAll(".category div");

  konsultasi.classList.add("active");

  categoryElements.forEach(function (category) {
    category.addEventListener("click", function () {
      categoryElements.forEach(function (element) {
        element.classList.remove("active");
      });

      category.classList.add("active");
    });
  });
});

// bantuan end

// kota
document.addEventListener("DOMContentLoaded", function () {
  const all = document.getElementById("all");
  const bandung = document.getElementById("bandung");
  const jakarta = document.getElementById("jakarta");
  const yogyakarta = document.getElementById("yogyakarta");

  all.classList.add("active");
  all.style.color = "#ff85a2";
  bandung.style.color = "black";
  jakarta.style.color = "black";
  yogyakarta.style.color = "black";
  bantuan.style.display = "block";

  all.addEventListener("click", function () {
    all.classList.add("active");
    all.style.color = "#ff85a2";
    bandung.style.color = "black";
    bandung.classList.remove("active");
    jakarta.style.color = "black";
    jakarta.classList.remove("active");
    yogyakarta.style.color = "black";
    yogyakarta.classList.remove("active");
  });

  bandung.addEventListener("click", function () {
    bandung.classList.add("active");
    bandung.style.color = "#ff85a2";
    all.style.color = "black";
    all.classList.remove("active");
    jakarta.style.color = "black";
    jakarta.classList.remove("active");
    yogyakarta.style.color = "black";
    yogyakarta.classList.remove("active");
  });

  jakarta.addEventListener("click", function () {
    jakarta.classList.add("active");
    jakarta.style.color = "#ff85a2";
    bandung.style.color = "black";
    bandung.classList.remove("active");
    all.style.color = "black";
    all.classList.remove("active");
    yogyakarta.style.color = "black";
    yogyakarta.classList.remove("active");
  });

  yogyakarta.addEventListener("click", function () {
    yogyakarta.classList.add("active");
    yogyakarta.style.color = "#ff85a2";
    bandung.style.color = "black";
    bandung.classList.remove("active");
    jakarta.style.color = "black";
    jakarta.classList.remove("active");
    all.style.color = "black";
    all.classList.remove("active");
  });
});
// kota end

// judul
const k1 = document.getElementById("k1");
const k2 = document.getElementById("k2");
const k3 = document.getElementById("k3");
const k4 = document.getElementById("k4");
const k5 = document.getElementById("k5");

k1.style.display = "block";

konsultasi.addEventListener("click", function () {
  k1.style.display = "block";
  k2.style.display = "none";
  k3.style.display = "none";
  k4.style.display = "none";
  k5.style.display = "none";
});

bantuanHukum.addEventListener("click", function () {
  k2.style.display = "block";
  k1.style.display = "none";
  k3.style.display = "none";
  k4.style.display = "none";
  k5.style.display = "none";
});

konseling.addEventListener("click", function () {
  k3.style.display = "block";
  k1.style.display = "none";
  k2.style.display = "none";
  k4.style.display = "none";
  k5.style.display = "none";
});

rumahAman.addEventListener("click", function () {
  k4.style.display = "block";
  k1.style.display = "none";
  k2.style.display = "none";
  k3.style.display = "none";
  k5.style.display = "none";
});

kesehatan.addEventListener("click", function () {
  k5.style.display = "block";
  k1.style.display = "none";
  k2.style.display = "none";
  k3.style.display = "none";
  k4.style.display = "none";
});
// judul end

categoryElements.forEach((categoryElement, index) => {
  categoryElement.addEventListener("click", function () {
    if (categoryElement.classList.contains("category-hover")) {
      categoryElement.classList.remove("category-hover");
      hasilSections[index].style.display = "none";

      categoryElement.style.backgroundColor = "";
      categoryElement.style.color = "";
      categoryElement.style.boxShadow = "";
    } else {
      categoryElements.forEach((element, i) => {
        if (i !== index && element.classList.contains("category-hover")) {
          element.classList.remove("category-hover");
          hasilSections[i].style.display = "none";

          element.style.backgroundColor = "";
          element.style.color = "";
          element.style.boxShadow = "";
        }
      });
      toggleHoverEffect(categoryElement, hasilSections[index]);
      categoryElement.style.backgroundColor = "#ff85a2";
      categoryElement.style.color = "#fcf6f5ff";
      categoryElement.style.boxShadow =
        "0px 0px 3.2px 3.2px rgba(255,133,162, 0.7)";
    }
  });
});

// result
const allCity = document.querySelectorAll(".allCity");
const bdg = document.querySelectorAll(".bdg");
const jkt = document.querySelectorAll(".jkt");
const diy = document.querySelectorAll(".diy");

document.getElementById("all").addEventListener("click", function () {
  showElements(allCity);
});
document.getElementById("bandung").addEventListener("click", function () {
  showElements(bdg);
});
document.getElementById("jakarta").addEventListener("click", function () {
  showElements(jkt);
});
document.getElementById("yogyakarta").addEventListener("click", function () {
  showElements(diy);
});

function showElements(elements) {
  elements.forEach((element) => {
    element.style.display = "block";
  });

  [allCity, bdg, jkt, diy].forEach((group) => {
    if (group !== elements) {
      group.forEach((element) => {
        element.style.display = "none";
      });
    }
  });
}

// popup
const btnmodal = document.querySelectorAll("#btn-modal");
btnmodal.forEach((el) => {
  el.addEventListener("click", handleModal);
});

function handleModal(event) {
  console.log(event.target);
  const id = event.target.getAttribute("data-id");
  const modal = document.getElementById(`modal-${id}`);
  const closebtn = document.getElementById(`close-${id}`);
  modal.style.display = "flex";
  closebtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status,
  };
}

function isNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(data) {
  return (
    data !== null &&
    typeof data.name === "string" &&
    data.name.trim() !== "" &&
    typeof data.city === "string" &&
    data.city.trim() !== "" &&
    typeof data.email === "string" &&
    data.email.trim() !== "" &&
    !isNaN(data.zipCode) &&
    document.getElementById("status").checked
  );
}

function submit() {
  const formData = handleGetFormData();
  const isValid = validateFormData(formData);

  const warning = document.getElementById("warning");

  if (!isValid) {
    warning.textContent = "Periksa form anda sekali lagi";
  } else {
    warning.textContent = "";
  }
}

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", submit);
