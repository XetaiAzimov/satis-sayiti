import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo ve açıklama */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MyCompany</h2>
          <p className="text-sm">
            Yaratıcı dijital çözümler ve kullanıcı odaklı tasarımlar sunuyoruz.
            Teknolojiyle geleceği şekillendiriyoruz.
          </p>
        </div>

        {/* Menü bağlantıları */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Şirket</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Hakkımızda</a></li>
            <li><a href="#" className="hover:text-white">Kariyer</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">İletişim</a></li>
          </ul>
        </div>

        {/* Kaynaklar */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kaynaklar</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">SSS</a></li>
            <li><a href="#" className="hover:text-white">Destek</a></li>
            <li><a href="#" className="hover:text-white">Gizlilik Politikası</a></li>
            <li><a href="#" className="hover:text-white">Kullanım Şartları</a></li>
          </ul>
        </div>

        {/* Sosyal medya ikonları */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Bizi Takip Et</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Alt kısım */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} MyCompany. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
