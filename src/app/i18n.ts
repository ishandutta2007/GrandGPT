import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  zh: {
    translation: {
      'Shortcut to open this app': '打开GrandGPT的快捷键',
      Settings: '设置',
      'Startup page': '启动页面',
      'Chat style': '会话风格',
      'Change shortcut': '修改快捷键',
      Save: '保存',
      Saved: '已保存',
      Export: '导出',
      Import: '导入',
      'Export/Import All Data': '导出/导入数据',
      'Data includes all your settings, chat histories, and local prompts': '数据包括所有设置、聊天记录和本地prompts',
      Edit: '编辑',
      Use: '使用',
      Send: '发送',
      Stop: '停止',
      Title: '标题',
      Content: '内容',
      Search: '搜索',
      Model: '模型',
      'Presale discount': '预售折扣',
      'More bots in All-In-One mode': '在All-In-One模式下使用更多chatbot（三合一、四合一）',
      'Chat history full-text search': '全文搜索聊天记录',
      'Customize theme': '自定义主题',
      'More features in the future': '享受未来所有功能更新',
      'Support the development of GrandGPT': '支持GrandGPT的开发',
      'Enjoy GrandGPT? Give us a 5-star rating!': '喜欢GrandGPT吗？给我们个5星好评吧！',
      'Write review': '去评价',
      'Activate license': '激活License',
      '🎉 License activated': '🎉 License已激活',
      'All-In-One Mode': 'All-In-One模式',
      'Two in one': '二合一',
      'Three in one': '三合一',
      'Four in one': '四合一',
      'Activate up to 5 devices': '最多可激活5台设备',
      Deactivate: '反激活',
      'Get premium license': '购买会员',
      'Theme Settings': '主题设置',
      'Theme Mode': '主题模式',
      'Theme Color': '主题色',
      'Follow Arc browser theme': '跟随Arc浏览器主题色',
      'iFlytek Spark': '讯飞星火',
      'You need to login to Poe first': '需要先登录Poe账号',
      'Login at bing.com': '去 bing.com 登录',
      'Login at poe.com': '去 poe.com 登录',
      'Login at xfyun.cn': '登录讯飞账号',
      'Lifetime license': '终身授权',
      'Join the waitlist': '加入waitlist',
      'GPT-4 models require ChatGPT Plus': 'ChatGPT Plus账号可使用',
      'Model used by ChatGPT iOS app, potentially faster': 'ChatGPT iOS app使用的模型，可能更快',
      'Poe subscribers only': 'Poe订阅会员可用',
      'Quick access in Chrome side bar': '在Chrome侧边栏快速访问',
      'You have opened GrandGPT {{openTimes}} times, consider unlock all features?':
        '哇！你已经打开GrandGPT {{openTimes}}次了，是否要解锁全部功能呢？🥺',
      'Open Prompt Library': '管理提示词',
      'Use / to select prompts, Shift+Enter to add new line': '使用 / 选择提示词，Shift+Enter添加换行',
      'Your Prompts': '你的提示词',
      'Community Prompts': '提示词社区',
      'Create new prompt': '创建提示词',
      'Earlybird price': '早鸟价格',
      'Share conversation': '分享会话',
      'Clear conversation': '清空会话',
      'View history': '查看历史消息',
      'Premium Feature': '高级功能',
      'Upgrade to unlock': '升级解锁',
      'Please check your network connection': '请检查您的网络连接，中国用户可能需要科学上网',
      'Display size': '显示大小',
      'You’ve reached the daily free message limit for this model': '你已经达到了该模型今日免费消息上限',
      'This is a limitation set by poe.com': '这是poe.com的限制',
      Feedback: '反馈',
      Theme: '主题',
      Premium: '付费会员',
    },
  },
  de: {
    translation: {
      'Shortcut to open this app': 'Tastenkürzel zum Öffnen dieser App',
      Settings: 'Einstellungen',
      'Startup page': 'Startseite',
      'Conversation style': 'Konversationsstil',
      'Change shortcut': 'Tastenkürzel ändern',
      Save: 'Speichern',
      Export: 'Exportieren',
      Import: 'Importieren',
      'Export/Import All Data': 'Alle Daten exportieren/importieren',
      'Data includes all your settings, chat histories, and local prompts':
        'Daten beinhalten alle Einstellungen, Chatverläufe und lokale Prompts',
    },
  },
  es: {
    translation: {
      'Shortcut to open this app': 'Acceso directo para abrir esta aplicación',
      Settings: 'Configuración',
      'Startup page': 'Página de inicio',
      'Conversation style': 'Estilo de conversación',
      'Change shortcut': 'Cambiar acceso directo',
      Save: 'Guardar',
      Export: 'Exportar',
      Import: 'Importar',
      'Export/Import All Data': 'Exportar/Importar todos los datos',
      'Data includes all your settings, chat histories, and local prompts':
        'Los datos incluyen todas tus configuraciones, historiales de chat y promociones locales',
    },
  },
  fr: {
    translation: {
      'Shortcut to open this app': 'Raccourci pour ouvrir cette application',
      Settings: 'Paramètres',
      'Startup page': 'Page de démarrage',
      'Conversation style': 'Style de conversation',
      'Change shortcut': 'Modifier le raccourci',
      Save: 'Enregistrer',
      Export: 'Exporter',
      Import: 'Importer',
      'Export/Import All Data': 'Exporter/Importer toutes les données',
      'Data includes all your settings, chat histories, and local prompts':
        'Les données incluent tous vos paramètres, historiques de chat et invitations locales',
    },
  },
  in: {
    translation: {
      'Shortcut to open this app': 'Pintasan untuk membuka aplikasi ini',
      Settings: 'Pengaturan',
      'Startup page': 'Halaman awal',
      'Chat style': 'Gaya percakapan',
      'Change shortcut': 'Ubah pintasan',
      Save: 'Simpan',
      Saved: 'Tersimpan',
      Export: 'Ekspor',
      Import: 'Impor',
      'Export/Import All Data': 'Ekspor/Impor Semua Data',
      'Data includes all your settings, chat histories, and local prompts':
        'Data mencakup semua pengaturan, riwayat percakapan, dan prompt lokal Anda',
      Edit: 'Edit',
      Use: 'Gunakan',
      Send: 'Kirim',
      Stop: 'Berhenti',
      Title: 'Judul',
      Content: 'Konten',
      Search: 'Cari',
      Model: 'Model',
      'Presale discount': 'Diskon pra-penjualan',
      'More bots in All-In-One mode': 'Lebih banyak bot dalam mode All-In-One',
      'Chat history full-text search': 'Pencarian teks penuh riwayat percakapan',
      'Customize theme': 'Kustomisasi tema',
      'More features in the future': 'Lebih banyak fitur di masa depan',
      'Support the development of GrandGPT': 'Dukung pengembangan GrandGPT',
      'Enjoy GrandGPT? Give us a 5-star rating!': 'Menikmati GrandGPT? Beri kami rating 5 bintang!',
      'Write review': 'Tulis ulasan',
      'Activate license': 'Aktifkan lisensi',
      '🎉 License activated': '🎉 Lisensi diaktifkan',
      'All-In-One Mode': 'Mode All-In-One',
      'Two in one': 'Dua dalam satu',
      'Three in one': 'Tiga dalam satu',
      'Four in one': 'Empat dalam satu',
      'Activate up to 5 devices': 'Aktifkan hingga 5 perangkat',
      Deactivate: 'Nonaktifkan',
      'Get premium license': 'Dapatkan lisensi premium',
      'Theme Settings': 'Pengaturan tema',
      'Theme Mode': 'Mode tema',
      'Theme Color': 'Warna tema',
      'Follow Arc browser theme': 'Ikuti tema browser Arc',
      'iFlytek Spark': 'iFlytek Spark',
      'You need to login to Poe first': 'Anda perlu login ke Poe terlebih dahulu',
      'Login at bing.com': 'Login di bing.com',
      'Login at poe.com': 'Login di poe.com',
      'Login at xfyun.cn': 'Login di xfyun.cn',
      'Lifetime license': 'Lisensi seumur hidup',
      'Join the waitlist': 'Gabung dalam daftar tunggu',
      'GPT-4 models require ChatGPT Plus': 'Model GPT-4 membutuhkan ChatGPT Plus',
      'Model used by ChatGPT iOS app, potentially faster':
        'Model yang digunakan oleh aplikasi ChatGPT iOS, mungkin lebih cepat',
      'Poe subscribers only': 'Hanya pelanggan Poe',
      'Quick access in Chrome side bar': 'Akses cepat di sisi bilah Chrome',
      'You have opened GrandGPT {{openTimes}} times, consider unlock all features?':
        'Wow! Anda telah membuka GrandGPT sebanyak {{openTimes}} kali, pertimbangkan untuk membuka semua fitur?',
      'Open Prompt Library': 'Buka Perpustakaan Prompt',
      'Use / to select prompts, Shift+Enter to add new line':
        'Gunakan / untuk memilih prompt, Shift+Enter untuk menambahkan baris baru',
      'Your Prompts': 'Prompt Anda',
      'Community Prompts': 'Prompt Komunitas',
      'Create new prompt': 'Buat prompt baru',
    },
  },
  ja: {
    translation: {
      'Shortcut to open this app': 'このアプリを開くためのショートカット',
      Settings: '設定',
      'Startup page': 'スタートアップページ',
      'Conversation style': '会話スタイル',
      'Change shortcut': 'ショートカットを変更',
      Save: '保存',
      Export: 'エクスポート',
      Import: 'インポート',
      'Export/Import All Data': 'すべてのデータをエクスポート/インポート',
      'Data includes all your settings, chat histories, and local prompts':
        'データには、すべての設定、チャット履歴、ローカルプロンプトが含まれます',
    },
  },
  th: {
    translation: {
      'Shortcut to open this app': 'ทางลัดเพื่อเปิดแอปนี้',
      Settings: 'การตั้งค่า',
      'Startup page': 'หน้าเริ่มต้น',
      'Conversation style': 'สไตล์การสนทนา',
      'Change shortcut': 'เปลี่ยนทางลัด',
      Save: 'บันทึก',
      Export: 'ส่งออก',
      Import: 'นำเข้า',
      'Export/Import All Data': 'ส่งออก/นำเข้าข้อมูลทั้งหมด',
      'Data includes all your settings, chat histories, and local prompts':
        'ข้อมูลรวมถึงการตั้งค่าทั้งหมดของคุณ ประวัติการแชท และข้อความเตือนในเครื่อง',
    },
  },
  'zh-TW': {
    translation: {
      'Shortcut to open this app': '開啟此應用程式的快捷鍵',
      Settings: '設定',
      'Startup page': '啟動頁面',
      'Conversation style': '對話風格',
      'Change shortcut': '變更快捷鍵',
      Save: '儲存',
      Export: '匯出',
      Import: '匯入',
      'Export/Import All Data': '匯出/匯入所有資料',
      'Data includes all your settings, chat histories, and local prompts': '資料包含所有設定、聊天紀錄和本地prompts',
    },
  },
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
