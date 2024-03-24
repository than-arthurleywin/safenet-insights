const categoryElements = document.querySelectorAll(".category .ctr");
const city = document.getElementById("kota");
const hasilSections = document.querySelectorAll(".hasil");

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
  satu.style.color = "rgb(250, 62, 172)";
  dua.style.color = "black";
  bantuan.style.display = "block";

  satu.addEventListener("click", function () {
    satu.classList.add("active");
    satu.style.color = "rgb(250, 62, 172)";
    dua.style.color = "black";
    dua.classList.remove("active");
    bantuan.style.display = "block";
    informasi.style.display = "none";
  });

  dua.addEventListener("click", function () {
    dua.classList.add("active");
    dua.style.color = "rgb(250, 62, 172)";
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
  all.style.color = "rgb(250, 62, 172)";
  bandung.style.color = "black";
  jakarta.style.color = "black";
  yogyakarta.style.color = "black";
  bantuan.style.display = "block";

  all.addEventListener("click", function () {
    all.classList.add("active");
    all.style.color = "rgb(250, 62, 172)";
    bandung.style.color = "black";
    bandung.classList.remove("active");
    jakarta.style.color = "black";
    jakarta.classList.remove("active");
    yogyakarta.style.color = "black";
    yogyakarta.classList.remove("active");
  });

  bandung.addEventListener("click", function () {
    bandung.classList.add("active");
    bandung.style.color = "rgb(250, 62, 172)";
    all.style.color = "black";
    all.classList.remove("active");
    jakarta.style.color = "black";
    jakarta.classList.remove("active");
    yogyakarta.style.color = "black";
    yogyakarta.classList.remove("active");
  });

  jakarta.addEventListener("click", function () {
    jakarta.classList.add("active");
    jakarta.style.color = "rgb(250, 62, 172)";
    bandung.style.color = "black";
    bandung.classList.remove("active");
    all.style.color = "black";
    all.classList.remove("active");
    yogyakarta.style.color = "black";
    yogyakarta.classList.remove("active");
  });

  yogyakarta.addEventListener("click", function () {
    yogyakarta.classList.add("active");
    yogyakarta.style.color = "rgb(250, 62, 172)";
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
      categoryElement.style.backgroundColor = "rgb(250, 62, 172)";
      categoryElement.style.color = "#fcf6f5ff";
      categoryElement.style.boxShadow =
        "0px 0px 3.2px 3.2px rgba(250, 62, 172, 0.7)";
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
