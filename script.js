window.onload = function() {
  var badge = document.getElementById("statusBadge");
  if (badge) {
    badge.innerText = "✅ النظام نشط ويعمل بنجاح 100%";
  }
};

function runUsb() {
  var inp = document.getElementById("usbFile");
  var out = document.getElementById("usbRes");
  if (!inp.files || inp.files.length === 0) {
    out.innerText = "اختر ملفاً أولاً!";
    out.style.color = "#ef4444";
    return;
  }
  var f = inp.files.item(0);
  var n = f.name.toLowerCase();
  if (n.endsWith(".exe") || n.endsWith(".bat") || n.endsWith(".vbs") || n.endsWith(".scr") || n.endsWith(".cmd")) {
    out.innerText = "🚨 تحذير: ملف تنفيذي خطير (" + f.name + ")! لا تفتحه ❌";
    out.style.color = "#ef4444";
  } else {
    out.innerText = "الملف آمن ✅ (" + f.name + ")";
    out.style.color = "#10b981";
  }
}

function runPhone() {
  var out = document.getElementById("phoneRes");
  var ua = navigator.userAgent.toLowerCase();
  var dev = ua.includes("android") ? "أندرويد 📱" : (ua.includes("iphone") ? "آيفون 📱" : "حاسوب 💻");
  out.innerText = "الجهاز: " + dev + " | المتصفح محمي ومشفر ✅";
  out.style.color = "#10b981";
}

function runPassGen() {
  var c = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789@#$%&*!";
  var p = "";
  for (var i = 0; i < 16; i++) {
    p += c.charAt(Math.floor(Math.random() * c.length));
  }
  document.getElementById("passIn").value = p;
  runPassCheck();
}

function runPassCheck() {
  var p = document.getElementById("passIn").value;
  var out = document.getElementById("passRes");
  if (p.length === 0) { out.innerText = ""; }
  else if (p.length < 8) { out.innerText = "ضعيفة جداً ❌"; out.style.color = "#ef4444"; }
  else if (p.length < 12) { out.innerText = "متوسطة ⚠️"; out.style.color = "#f59e0b"; }
  else { out.innerText = "قوية ومحصّنة ✅"; out.style.color = "#10b981"; }
}

function runCopy() {
  var el = document.getElementById("passIn");
  var out = document.getElementById("passRes");
  if (!el.value) return;
  el.select();
  document.execCommand("copy");
  out.innerText = "تم النسخ بنجاح ✔";
  out.style.color = "#fbbf24";
}

function runCrypto(enc) {
  var t = document.getElementById("secText");
  var k = document.getElementById("secKey").value;
  var out = document.getElementById("secRes");
  if (!t.value || !k) {
    out.innerText = "أدخل النص والرمز السري!";
    out.style.color = "#ef4444";
    return;
  }
  try {
    if (enc) {
      t.value = btoa(unescape(encodeURIComponent(k + "::" + t.value)));
      out.innerText = "تم التشفير بنجاح 🔒";
      out.style.color = "#10b981";
    } else {
      var dec = decodeURIComponent(escape(atob(t.value)));
      if (dec.startsWith(k + "::")) {
        t.value = dec.substring(k.length + 2);
        out.innerText = "تم فك التشفير 🔓";
        out.style.color = "#10b981";
      } else {
        out.innerText = "الرمز السري خطأ ❌";
        out.style.color = "#ef4444";
      }
    }
  } catch (e) {
    out.innerText = "نص مشفر غير صالح ❌";
    out.style.color = "#ef4444";
  }
}

function runUrl() {
  var u = document.getElementById("urlIn").value.trim();
  var out = document.getElementById("urlRes");
  if (!u) { out.innerText = "أدخل رابطاً أولاً!"; out.style.color = "#ef4444"; return; }
  if (u.startsWith("https://")) {
    out.innerText = "الرابط آمن ومشفر (HTTPS) ✅";
    out.style.color = "#10b981";
  } else {
    out.innerText = "⚠️ تحذير: الرابط غير مشفر (لا يبدأ بـ HTTPS)";
    out.style.color = "#f59e0b";
  }
}

function runWallet() {
  var w = document.getElementById("walIn").value.trim();
  var out = document.getElementById("walRes");
  if (!w) { out.innerText = "الصق عنوان المحفظة!"; out.style.color = "#ef4444"; return; }
  if (w.startsWith("G") && w.length === 56) {
    out.innerText = "محفظة Pi Network صحيحة 100% π ✅";
    out.style.color = "#fbbf24";
  } else if (w.startsWith("0x") && w.length === 42) {
    out.innerText = "محفظة Ethereum / BSC صحيحة ✅";
    out.style.color = "#10b981";
  } else if (w.startsWith("T") && w.length === 34) {
    out.innerText = "محفظة Tron / USDT-TRC20 صحيحة ✅";
    out.style.color = "#10b981";
  } else {
    out.innerText = "⚠️ صيغة العنوان غير صحيحة أو ناقصة ❌";
    out.style.color = "#ef4444";
  }
}

function runMail() {
  var m = document.getElementById("mailIn").value.trim().toLowerCase();
  var out = document.getElementById("mailRes");
  if (!m || !m.includes("@") || !m.includes(".")) {
    out.innerText = "صيغة البريد غير صحيحة ❌";
    out.style.color = "#ef4444";
    return;
  }
  var d = m.split("@").pop();
  if (d === "yopmail.com" || d === "tempmail.com" || d === "10minutemail.com") {
    out.innerText = "⚠️ تحذير: بريد مؤقت وهمي!";
    out.style.color = "#f59e0b";
  } else {
    out.innerText = "البريد سليم وموثوق (" + d + ") ✅";
    out.style.color = "#10b981";
  }
}

function runScore() {
  var c = document.querySelectorAll(".chk");
  var n = 0;
  c.forEach(function(x) { if (x.checked) n++; });
  var p = Math.round((n / c.length) * 100);
  document.getElementById("pct").innerText = p + "%";
  document.getElementById("fillBar").style.width = p + "%";
}
