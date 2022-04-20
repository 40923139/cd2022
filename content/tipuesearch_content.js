var tipuesearch = {"pages": [{'title': 'About', 'text': 'Repository: \n https://github.com/mdecourse/cmstemplate \n https://gitlab.com/mdecourse/cmstemplate \n Github Pages:  https://mde.tw/cmstemplate \n 其實 2005 年  Git  已經出現, 2006 年  Fossil SCM  也陸續推出. 但是在 2008 年以機械工程師管理個人電子檔案的文章: \n 2008_Organizing and Managing Personal Electronic Files- A Mechanical Engineer’s Perspective.pdf  雖然沒能提及分散式版次管理系統的概念, 但這篇文章至少出現許多機械相關領域人士必須了解的單字與專有名稱, 因此仍將它保留在此. \n 至於  PythonNotesForProfessionals.pdf  則是一份由電腦系統自動整理出來的 Python 相關資料. \n 利用 cmstemplate 建立以 CMSiMDE 作為子模組的動態與靜態網站方法為: \n \n 登入 Github 帳號 \n 將瀏覽器指向  https://github.com/mdecourse/cmstemplate \n 利用  Use this template  按鈕建立倉儲 \n \n clone 帶有 CMSiMDE 的指令: \n git clone --recurse-submodules URL \n 上述 URL 即為希望將倉儲資料取下進行改版的 Github 倉儲網路統一資源位置, 也就是 Github 倉儲網址. \n 每一個以 cmstemplate 為 template 的倉儲, 其根目錄都帶有: \n \n init.py  - 其中的 site_title, ip 與 port 可以讓使用者自行修改, site_title 是網站標題, ip 為動態網站啟動時所使用的網路位址, 可設為內部或外部 IPv4 (IPv6), port 則是動態網站啟動時所佔用的埠號. \n http-server.py  - 執行後會使用內建的 localhost 與 port 8444 伺服 content 子目錄中的 CMSiMDE 靜態網頁. \n cms.bat  - 讓使用者執行動態網站用的批次檔案. \n acp.bat  - 若使用者已經將倉儲設為 ssh 連線, 且提供遠端與近端的認證模式, 則可以在執行此批次指令之後加上提交字串, 即可執行 git add ., git commit -m "提交訊息", 以及 git push 等三個指令. \n \n', 'tags': '', 'url': 'About.html'}, {'title': '可攜系統', 'text': 'portablekmol_base.7z  (下載 118MB, 解開壓縮後 148MB) \n 包括 data 目錄與 start_ipv6.bat, start_ipv4.bat, stop.bat \n 功能: 啟動後可以啟動 SciTE 編輯器, 可用於類解譯 ANSI C 程式, 以及  Solvespace . \n Python395.7z  (下載 123MB, 解開壓縮後 495MB) \n 功能: 與  portablekmol_base.7z  結合後, 可以利用 SciTE 編輯器執行 Python 程式. \n portablegit_2.31.1.7z  (下載 60MB, 解開壓縮後 286MB) \n 功能: 與  portablekmol_base.7z  結合後, 可以利用可攜程式系統的命令列視窗執行 git 指令. \n lua-5.4.3.7z  (下載 662KB, 解開壓縮後 4MB) \n 功能: 與  portablekmol_base.7z  結合後, 可以利用 SciTE 編輯器執行 Lua 程式. \n PUTTY.7z  (下載 940KB, 解開壓縮後 4MB) \n 功能: plink.exe 可以與 git 結合, 利用 Putty.exe 中所設定的 session 名稱進行 SSH 連線. \n msys64_20210419.7z  (下載 3.5GB, 解開壓縮後 12GB) \n 功能:  Msys2  安裝 \n pacman -S mingw-w64-x86_64-toolchain\npacman -Sy mingw-w64-x86_64-qt5\npacman -Sy mingw-w64-x86_64-qt5-static\npacman -Sy mingw-w64-x86_64-ffmpeg\npacman -Sy mingw-w64-x86-64-cmake \n cmake-3.21.0-windows-x86_64.7z  (下載 16MB, 解開壓縮後 89MB) \n msys64_20210419_clean.7z  (下載 87MB , 解開壓縮後 374MB) \n 功能: 尚未安裝任何 Package 的  Msys2  系統. \n Flutter_portable_20210707.7z  (下載 4.7 GB, 解開壓縮後約 20GB) \n 可攜系統中的 Android sdk 容量約 7.5 GB, Flutter 與 Dart 容量約 1.6 GB, Java jdk 容量約 200MB. vscode 約 530 MB, home_mdecourse 目錄下含手機 emulator 檔案容量約 9.3 GB. \n node-v14.17.2-x64.7z  (下載 17MB, 解開壓縮後 78MB) \n rust_1.53.0_portable_for_msys2.7z  (下載 147MB , 解開壓縮後 1.13GB) \n Erlang 10.7 and Elixir portable.7z  for Windows (下載 62MB , 解開壓縮後 340MB) \n Deno 1.11.5:  https://github.com/denoland/deno/releases/  直接下載 Windows 版本解開壓縮後 55MB, 放入可攜系統 data 目錄中即可執行. \n CoppeliaSimEdu 4.0.0.7z  for Windows 64 位元操作系統(下載 134MB, 解開壓縮後 337MB) \n CoppeliaSimEdu 4.0.0.zip  for Mac, 解開壓縮後必須將 coppeliaSim.app 目錄改名為 coppeliaSim 後進入執行sudo xattr -r -d com.apple.quarantine *, 以便解除 Mac 對非 App Store 下載套件所設定的隔離屬性. 然後以 /Users/account/copsim4/coppeliaSim/Contents/MacOS/coppeliaSim 啟動 Coppeliasim. \n CoppeliaSimEdu 4.0.0.tar.xz  for Ubuntu \n 功能: 可免費提供大學機電資整合課程使用, 且開放原始碼, 可用於機電資控制系統設計與模擬 (InfoMechaTronic control system design and simulation). \n robodk_522.7z  (下載 364MB, 解開壓縮後 1GB) \n 功能: 提供限縮功能版本 Free Trial, 只可模擬但無法存檔, 可用於工業級機械手臂在線與離線控制系統設計與模擬. \n Range3.7z  (下載 27MB, 解開壓縮後 109MB) \n 功能: 開放源 FEM (Finite Element Method) 分析套件. \n webots-R2021a.7z  (下載 1.5GB, 解開壓所後 2.9GB) \n 功能: 採 Apache 2.0 使用授權的開放源套件, 可用於機電資控制系統設計與模擬. \n xsltproc.7z  - get from\xa0 https://github.com/CoppeliaRobotics/xsltproc-win \xa0 \n GitExtensions_3.5.1.7z  from  https://github.com/gitextensions/gitextensions \n', 'tags': '', 'url': '可攜系統.html'}, {'title': 'Lua 解譯', 'text': '利用 Msys2 編譯 Lua 原始碼: \n 從  https://www.lua.org/  下載 5.4.3 原始碼解開壓縮檔案後, cd 進原始碼目錄後執行: \n mingw32-make mingw \n 即可在 src 目錄中取得 luac.exe, liblua.a, lua.exe, lua54.dll 等檔案. \n 套用  https://github.com/fengari-lua/fengari-web  可以建立網際 Lua 解譯系統: \n http://mde.tw/lab/downloads/lua/index.html \n 若希望在 SciTE 編輯器中解譯 .lua 程式, 則必須修改 Lua.properties 設定: \n 選擇利用 y:\\lua-5.4.3\\luac.exe 與 lua.exe 編譯或解譯 .lua 程式檔案. \n command.compile.*.lua=y:\\lua-5.4.3\\luac -o "$(FileName).luc" "$(FileNameExt)"\n# Lua 5.1\ncommand.go.*.lua=y:\\lua-5.4.3\\lua "$(FileNameExt)" \n \n', 'tags': '', 'url': 'Lua 解譯.html'}, {'title': 'Wink', 'text': '這個頁面採用  https://www.debugmode.com/wink/  建立下列電腦操作流程展示影片. \n 假如 video 標註中的影片需要在手機 (例如:  iOS ) 或平板上播放, 必須要加入 autoplay 屬性. \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Wink.html'}, {'title': 'Add Wink', 'text': '由於 Wink 所建立的 mp4 影片檔案必須透過 Javascript 與 css 的設定才能具備所有功能, 在 CMSiMDE 頁面新增 Wink mp4 影片時必須直接編輯 html, 除了導入與 mp4 檔案對應的 Javascript 外, HTML5 Videl 必須加以修正才能在手機與平板上的瀏覽器播放影片. \n 以下為相關插入範例語法: \n \n \n 以下則為參考用的 Wink 影片插入 html: \n <div class="winkVideoContainerClass"><video width="800" height="600" autoplay="autoplay" class="winkVideoClass" data-dirname="./../cmsimde/static" data-varname="winkVideoData2" loop="loop" muted="" playsinline="">\n<source src="./../downloads/wink_tutorial2.mp4" type="video/mp4" /></video>\n<div class="winkVideoOverlayClass"></div>\n<div class="winkVideoControlBarClass"><button class="winkVideoControlBarPlayButtonClass"></button> <button class="winkVideoControlBarPauseButtonClass"></button>\n<div class="winkVideoControlBarProgressLeftClass"></div>\n<div class="winkVideoControlBarProgressEmptyMiddleClass"></div>\n<div class="winkVideoControlBarProgressRightClass"></div>\n<div class="winkVideoControlBarProgressFilledMiddleClass"></div>\n<div class="winkVideoControlBarProgressThumbClass"></div>\n</div>\n<div class="winkVideoPlayOverlayClass"></div>\n</div> \n 其中的 data-dirname 屬性在動態網頁時必須設定為 /static, 而每一個 mp4 影片都必須有不同的 data-varname 屬性名稱, 以上一頁有兩個 Wink mp4 影片並列時, 第一個影片的 data-varname 為 winkVideoData1, 而第二部的 data-varname 則設為 winkVideoData2. \n 至於 winkVideoData 變數的內容則取自 Wink 專案轉檔後與 .htm 超文件檔案同一目錄下的 Javascript 檔案. \n \n', 'tags': '', 'url': 'Add Wink.html'}, {'title': 'CMSiMDE', 'text': '注意: 由於 CMSiMDE 近端啟動時之 ssl_context 改用 adhoc, 因此 Python 必須額外安裝 pyopenssl: \n pip install pyopenssl \n 若是在 Linux 則使用 sudo pip3 install pyopenssl \n 若是在 Mac 則使用 pip3 install pyopenssl \n CMSiMDE ( https://github.com/mdecourse/cmsimde ) 是一套以 Python 與 Flask 框架編寫的網際內容管理系統, \n 使用 CMSiMDE 建議使用者安裝 flask flask_cors bs4 lxml pelican markdown leo pyopenssl 等模組. \n 亦即在 Windows 環境中, 以命令列執行: \n pip install flask flask_cors bs4 lxml pelican markdown leo pyopenssl \n 其中的 flask flask_cors bs4 lxml pelican markdown為啟動 CMSiMDE 的必要模組, 而 leo 則是 CMSMDE 開發者所使用的大綱管理工具, 可以用於與 CMSiMDE 整合的 Pelican blog 及 Reveal.js 網際簡報編輯之用. \n', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': '建立網頁', 'text': '由於 CMSiMDE 帶有動態網頁與靜態網頁等兩個部分, 動態網頁執行時需要該伺服器可執行 Python 3, 以及 flask flask_cors bs4 lxml pelican markdown pyopenssl 等模組. 而靜態網頁的伺服則只需要 WWW Server 即可. \n 若使用者在 Github 使用 CMSiMDE 建立網頁, 可以透過  https://github.com/mdecourse/cmstemplate  template 建立, 步驟與兩種設定方式如下: \n \n 使用者登入 Github \n 將瀏覽器連線至  https://github.com/mdecourse/cmstemplate  頁面後, 點擊 Use this template 按鈕後, 選擇所要採用的 repository 名稱後, 就可以建立以 CMSiMDE 作為子模組的 Github 倉儲. \n 假如使用者所選擇的倉儲名稱為: 帳號.github.io, 則 Github 會自動設定該倉儲的 main 分支為 Github Pages 根目錄, 意即一旦 Github Pages 完成轉檔 (提交訊息之後會出現綠勾), 則該倉儲的對應網頁將為: https://github_帳號.github.io \n 若使用利用  https://github.com/mdecourse/cmstemplate  作為 template 所建立的倉儲名稱並非 github_帳號.github.io, 則使用者必須自行至該倉儲的 settings/Github Pages 選項中將 main branch 設為 Github Pages 對應的 root 目錄. 之後, Github 將會採用: github_帳號.github.io/倉儲名稱 作為與該倉儲對應的 Github Pages 網址. \n \n', 'tags': '', 'url': '建立網頁.html'}, {'title': '基本操作', 'text': '當使用者利用 cms.bat 啟用動態網站後, 即可利用瀏覽器  https://localhost:9443  (系統啟動之 IP 與埠號可以在 init.py 中設定), 在近端維護網站內容, 由於此時動態網站僅在 localhost 啟動, 因此可以使用內建的管理者密碼 "admin" 登入管理網站內容, 若是使用外部 IP 啟動, 則必須自行修改管理者密碼. \n 在 Windows 操作系統, cms.bat 內容為: \n python cmsimde/wsgi.py \n 若是在 Mac 或 Linux 操作系統, 則 cms 為可執行檔, 且內容為: \n #! /bin/bash\npython3 cmsimde/wsgi.py \n 至於 acp.bat 在 Windows 操作系統的內容為: \n echo off\nset message=%1\ngit add .\ngit commit -m %message%\ngit push \n 但是在 Mac 與 Linux 操作系統, 則 acp 為可執行檔, 而內容則為: \n #! /bin/bash\ngit add .\ngit commit -m "$1"\ngit push \n 在 Windows 執行 batch 檔案, 可以直接在命令列視窗執行 cms 或 acp "提交訊息", 但是在 Mac 與 Linux 執行 Bash 檔案, 必須使用 ./cms 或 ./acp "提交訊息". \n 假如使用者修改 init.py 中的 ip 或 uwsgi 設定, 讓動態網站在外部 IP 啟動, 則必須自行透過動態網站中的  config  指令修改管理者密碼. \n 動態網站編輯表單中的  config  除了可更改網站管理者密碼外, 也可以更改網站的頁面內容標題 (外部標題可以透過 init.py 中的 site_title 更改). \n', 'tags': '', 'url': '基本操作.html'}, {'title': '客製化', 'text': '假如利用  https://github.com/mdecourse/cmstemplate  作為 template 所建立的 Github Pages 網站, 倉儲根目錄中的 cms.bat 可以在執行動態網站系統之後, 利用 pipe 讓 cms.bat 同時開啟 Firefox  https://localhost:9443 \n 修改後的 cms.bat 如下: \n python cmsimde/wsgi.py 1> nul | "C:\\Program Files (x86)\\Mozilla Firefox\\firefox" https://localhost:9443 \n 前面 python cmsimde/wsgi.py 加上 1> nul 的目的是因為 pipe 執行時會將前面指令執行結果轉為隨後執行指令的輸入, 而 1> nul 則會將標準輸出的任何資料移除, 任何輸出不會影響 Firefox 執行. \n', 'tags': '', 'url': '客製化.html'}, {'title': '編輯網頁內容', 'text': '編輯 CMSiMDE 動態網站中的內容, 可以透過表單中的  Edit All  或  Edit  按鈕進行.  Edit  可用於單頁編輯, 操作時先選擇左側的頁面標題, 等系統顯示該頁面內容後, 再點擊上方的  Edit  按鈕即可進入該頁面的編輯模式. \n Edit All  通常用於單次刪除所有頁面內容或者只保留特定頁面用, 點擊後會將所有頁面內容置於編輯器中. \n 目前採 AJAX 對編輯器存擋, 因此當使用者按下 Save 時, 系統會簡短出現  saved!  畫面, 表示所編輯的內容已經存入 config/content.htm \n 當使用者在頁面中新增 H1, H2, 或 H3 標題內容時, 由於系統必須根據這些標題進行分頁, 因此使用者按下 Save 後, 系統畫面將會 reload, 並且回到系統的根目錄. \n 若使用者採用 Edit All 同時編輯所有畫面, 按下 Save 後, 系統也會 reload 並回到系統根目錄. \n 另外, 當使用者在頁面中刪除 H1, H2 或 H3 標題時, 系統也會在存擋後 reload 至系統根目錄. \n', 'tags': '', 'url': '編輯網頁內容.html'}, {'title': '上傳與引用檔案', 'text': 'File Upload  可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄. \n 引用使用者上傳的檔案 \n PythonNotesForProfessionals.pdf \n', 'tags': '', 'url': '上傳與引用檔案.html'}, {'title': '上傳與引用圖片', 'text': 'Image Upload  可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄. \n 引用使用者上傳的檔案 \n \n \n', 'tags': '', 'url': '上傳與引用圖片.html'}, {'title': '嵌入程式碼', 'text': '利用 Insert/Edit code 功能, 可以嵌入各種程式碼: \n // 下列 Dart 程式, 利用 Runge Kutta 迭代運算法, 解常微分方程式\n// 設 t 為時間, x 則設為物體的位移\n// dx / dt = (t - x)/2, 起始值 t0=0, x0=1, 求 t=2 時的 x 值\n//\n// 已知起始值 t0 與 x0 後, 可以利用下列 rungeKutta 函式, 以\n// h 為每步階增量值, 求 dxdt 常微分方程式任一 t 的對應值 x\n// 定義函式 rungeKutta, 共有四個輸入變數\nrungeKutta(t0, x0, t, h) {\n  // 利用步階增量值 h 與 t 的起始及終點值\n  // 計算需要迭代的次數 n\n  int n = ((t - t0) / h).toInt();\n  // 宣告 x 為雙浮點數, 且設為起始值 x0\n  double x = x0;\n  // 利用已知的 t0, x0, t 終點值與步階增量值 h, 迭代求 x 對應值\n  // 索引值 i 將每次增量 1, 從 i=1 執行 for 環圈至 i=n\n  for (int i = 1; i <= n; i++) {\n    // 將此階段的 t 與 x 值代入 dxdt 函式求下列四個浮點變數值\n    double k1 = h * dxdt(t0, x);\n    double k2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * k1);\n    double k3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * k2);\n    double k4 = h * dxdt(t0 + h, x + k3);\n    // 利用上述四個變數值求此步階增量後的對應 x 值\n    x = x + (1.0 / 6.0) * (k1 + 2 * k2 + 2 * k3 + k4);\n    // 每次 for 迴圈執行最後, 準備計算下一個步階增量後的 x 對應值\n    // t 起始值配合步階增量值 h, 進行增量\n    t0 = t0 + h;\n  }\n  // 完成 for 迴圈迭代後, 傳回與 t 終點值對應的 x 值\n  return x;\n}\n\n// 將微分方程式 "dx / dt = (t - x)/2" 定義為 dxdt 函式\ndxdt(t, x) {\n  return ((t - x) / 2);\n}\n\n// 定義 main() 主函式內容, 目的在利用 rungeKutta 函式\n// 解常微分方程式\nmain() {\n// Driver method\n// num 資料型別可以是整數或雙浮點數\n  num t0 = 0;\n  num x = 1;\n  num t = 2;\n  double h = 0.2;\n  print(\'The value of x at t=$t is: ${rungeKutta(t0, x, t, h)}\');\n}\n \n \n', 'tags': '', 'url': '嵌入程式碼.html'}, {'title': '嵌入影片檔', 'text': '直接利用 Source code 功能, 將影片檔案的 iframe 標註放入後存檔: \n \n', 'tags': '', 'url': '嵌入影片檔.html'}, {'title': '檢視 STL', 'text': '使用 Github 所提供的 STL viewer 嵌入 github.com/mdecourse/cmstemplate main branch 中 downloads 目錄中的 spikeball.stl \n <script src="https://embed.github.com/view/3d/mdecourse/cmstemplate/main/downloads/spikeball.stl"></script> \n 將上列 script 標註放入頁面 HTML 內容後, 可以檢視 STL 零件檔案. \n \n \n \n \n 以 CMSiMDE 內建的 static/viewstl.html 檢視 STL 檔案: \n 使用 iframe 其 src 指向 STL 檔案的絕對 URL 路徑: \n /static/viewstl.html?src=https://mde.tw/cmstemplate/downloads/spikeball.stl \n 就可以如下檢視 downloads/spikeball.stl \n \n', 'tags': '', 'url': '檢視 STL.html'}, {'title': '置入 disqus', 'text': '利用 Gmail 信箱可以至  https://blog.disqus.com/  登記一個免費的 Basic 帳號, 取得對應的 Javascript 程式碼 (其實是 html 內容, 包含導入 disqus Javascript 程式庫的資料內容) 之後, 使用者就可以在特定的 CMSiMDE 頁面置入 disqus 討論與回應系統. \n 使用範例: \n https://mde.tw/eng/content/index.html \n https://mde.tw/eng/content/Python.html \n https://mde.tw/eng/content/Memo.html \n', 'tags': '', 'url': '置入 disqus.html'}, {'title': 'Gitlab 同步', 'text': '利用 git remote add gitlab  https://gitlab.com/user/repository.git  可以在近端倉儲中的 .git/config 中新增一個名稱為 gitlab, 且與  https://gitlab.com/user/repository.git  倉儲對應的設定. 使用者可以將此倉儲改版內容以 git push gitlab 推向 Gitlab. \n 至於 Gitlab Pages 額外需要下列 .yml 檔案進行轉換設定: \n .gitlab-ci.yml \n pages:\n  stage: deploy\n  script:\n  - mkdir .public\n  - cp -r * .public\n  - mv .public public\n  artifacts:\n    paths:\n    - public\n  only:\n  - master\nvariables:\n  GIT_SUBMODULE_STRATEGY: recursive \n \n', 'tags': '', 'url': 'Gitlab 同步.html'}, {'title': 'Heroku 部署', 'text': '與 Heroku 部署有關資訊請參考:  https://mde.tw/cp2020/content/Heroku.html \n', 'tags': '', 'url': 'Heroku 部署.html'}, {'title': 'Fossil SCM', 'text': '在 Github 之外, 可以同步將各倉儲資料存放至 Gitlab, Heroku (有 500 MB 容量限制) 與 Fossil SCM. \n 希望整合 Github 與 Fossil SCM 倉儲步驟說明如下: \n 針對 Github 中已經有  https://github.com/mdecourse/cmstemplate  倉儲, 希望同步建  https://fossil.kmol.info/cmstemplate  與之內容同步. \n 登入 fossil.kmol.info 主機, 在 /home/user/repository 目錄中, 以 fossil init cmstemplate.fossil 建立空倉儲. 此時 Fossil SCM 將會列出以登入帳號作為帳號的管理者密碼. \n 管理者利用  https://fossil.kmol.info/cmstemplate  連結, 以 user 登入, 並利用上列管理者密碼進入管理區, 先行透過 Setup/users 變更 user 對應密碼. \n 回到 Windows 以  fossil clone https://user@fossil.kmol.info/cmstemplate cmstemplate.fossil  取下倉儲資料, 過程中將需要輸入與 user 對應的密碼, 並被詢問是否儲存密碼, 若選擇儲存密碼則隨後的 fossil commit 將回自動提交推送. \n 接著在近端必須開啟空 cmstemplate.fossil 倉儲, 主要目的是取得 __FOSSIL__, 並且以 git pull 完整拉下位於  https://github.com/mdecourse/cmstemplate  中的資料並與空 __FOSSIL__ 進行整合. 其中在 Fossil SCM 端必須將 Setup/Settings 中的 default-csp 設為:  https://fonts.googleapis.com  (讓 CMSiMDE 靜態網頁可以在 Fossil SCM doc 頁面中正常顯示), 且勾選 dotfiles (讓 Fossil SCM 可以儲存 .git 中的版本資料). \n \n 參考資料: \n 編譯 Fossil SCM: \n \xa0 http://project.mde.tw/blog/zai-msys2-huan-jing-bian-yi-fossil-scm.html \n', 'tags': '', 'url': 'Fossil SCM.html'}, {'title': '注意事項', 'text': '因為  https://github.com/mdecourse/cmstemplate  將 CMSiMDE 倉儲作為 submodule, 因此使用者利用 cmstemplate 作為 template 後, 必須使用 git clone --recurse-submodules 取下遠端倉儲. \n 例如: \n 若使用者的倉儲 URL 為  https://github.com/mdecourse/cmstemplate \n 則可以在近端利用: \n git clone --recurse-submodules  https://github.com/mdecourse/cmstemplate.git \n 將遠端倉儲資料存入 cmstemplate 目錄中. \n 目前的 cmstemplate 內建 cms.bat 與 acp.bat 等兩個 batch 檔案, 可以協助使用者直接在倉儲根目錄啟動 CMSiMDE 動態網頁, 以及單一指令式即可完成 git add, git commit 以及 git push, 但是前提是使用者必須設定以 ssh 方式與 Github 倉儲進行驗證. \n 例如: \n 若使用者已經將倉儲內容 clone 至近端, 且已經帶有 cmsimde 子模組的內容. \n 則可以在近端命令列進入 cmstemplate 倉儲目錄執行: \n cms.bat \n 開啟動態網頁系統. 並以  https://localhost:9443  開啟. \n 一旦完成動態網頁的編輯, 利用 Generate Pages 可以轉為靜態網站, 且各 html 檔案將位於 content 目錄中. \n 若使用者希望檢查近端靜態網頁的內容, 可以利用 SciTE 開啟倉儲中的 http-server.py, 並利用瀏覽器以  https://localhost:8444  檢查靜態網頁內容. \n 一旦使用者要將近端倉儲的動態與靜態網頁內容推向 Github, 則必須將倉儲中 .git/config 的 url, 從 https 改為 ssh 的連線格式: \n 例如: \n 原先 .git/config origin 的 url 為 url =  https://github.com/mdecourse/cmstemplate.git,  則必須改為: \n url =  git@github.com:mdecourse/cmstemplate.git \n 之後假如使用者要以 "add some files" 字串當作提交說明訊息, 則可以在命令列中的倉儲目錄執行: \n acp.bat "add some files" \n', 'tags': '', 'url': '注意事項.html'}, {'title': '標題選擇', 'text': '由於 CMSiMDE 中的動態網站透過 config/content.htm 的 H1~H3 超文件標註進行分頁, 因此使用者利用 cms.bat 開啟動態網站後, 必須注意各頁面標題文字的選擇: \n \n 頁面標題文字儘量簡短  - 頁面標題就有如文章的章節標題, 只要該標題具有該頁面內容的代表性即可, 越簡短越好. \n 頁面標題文字不要使用標點符號  - 因為標點符號中的 "/" 會造成頁面擷取時 URL 指令分段上的誤判, 至於標題文字中若有 ":" 則會在動態內容轉靜態內容時, 因 Windows 不允許檔案名稱帶有 ":" 而無法轉檔. \n 頁面標題中不可以有超文件標註  - 由於 CMSiMDE 動態網站編輯器採用 GUI 進行, 採用滑鼠標修頁面標題時, 可能無意中將 HTML 標註放入 H1~H3 標題文字中, 如此可能會造成 CMSiMDE 分頁錯誤而無法開啟動態網站. 當使用者要檢查所使用的頁面標題是否帶有 html 標註, 可以透過編輯功能中的 Source Code 檢查. \n H1 標題數量不可過多  - 由於 CMSiMDE 的靜態網站支援手機模式, 當頁面 H1 標題數量超過 10 個之後, 頁面標題可能無法在螢幕上最上方以一列顯示, 而是必須出現在第二行, 結果將會導致頁面展開時的 Javascript 程式產生錯亂, 結果為無法直接以滑鼠點擊進入特定頁面. \n \n \n \n', 'tags': '', 'url': '標題選擇.html'}, {'title': '靜態網頁 404', 'text': '當使用者將近端網頁倉儲資料推向 Github 後, commit 提交訊息之後若沒有出現綠勾, 表示靜態網頁無法轉檔成功, 這時連接靜態網頁時, 將會出現 404, 通常情況下是因為倉儲中 cmsimde 子模組的版次無法與遠端  https://github.com/mdecourse/cmsimde  中的版本對應, 而造成此問題的原因, 通常是因為使用者直接在倉儲的 cmsimde 子模組目錄中進行不當的 git add 與 commit, 因為使用者並沒有對子模組改版的權限, 一旦對 cmsimde 子模組 git add 與 commit 之後, git 就會將 cmsimde 的 HEAD 對應到一個新的 cmsimde 版次號, 但此版次號並不是 cmsimde 子模組 official 的版次, 因此若在此時失去對 cmsimde 子模組的正確對應下, 回到倉儲根目錄完成新增提交與推送, Github 將會因為無法找到正確對應的 cmsimde 版次而無法完成靜態網頁的轉檔. \n 上述靜態網頁出現 404 錯誤訊息的處理方式如下: \n \n 從  https://github.com/mdecourse/cmsimde  倉儲中複製最新版本的版次號, 以  2021/03/03 的版次 為例, 版次號為 1c3aeec1f5d26b421743d2f5ef8bb7d5b99292af, 使用者只需要最前面的 7 個字元, 也就是 1c3aeec. \n 然後在近端倉儲中, 以命令列進入 cmsimde 目錄後執行:  git checkout 1c3aeec. \n 接下來在 cmsimde 目錄中, 執行 git checkout master, 這時正確版次的 cmsimde 內容將會合併到 master 分支. \n 接著退回倉儲目錄, 以 git add, git commit 及 git push 將倉儲改版內容推向 Github 後應該就可以將倉儲正確轉為靜態網站內容. \n \n', 'tags': '', 'url': '靜態網頁 404.html'}, {'title': '動態網站錯誤', 'text': 'CMSiMDE 動態網站經常出現的錯誤是無法對 config/content.htm 分頁, 這時可以利用 SCiTE 編輯 content.htm, 找尋是否 H1~H3 標註中是否帶有特殊符號, 如 "/" 或 ":" 等. \n', 'tags': '', 'url': '動態網站錯誤.html'}, {'title': '延伸開發', 'text': '為了建立 responsive site: \n 靜態網頁: \n Javascript 程式庫: \n https://getbootstrap.com/ \n 動態系統: \n Javascript editor \n TinyMCE:  https://www.tiny.cloud/ \n Syntax highlighter:  https://prismjs.com/ \n Ajax bit by bit file uploader: \n Flask \n Flask_cors \n bs4 \n lxml \n markdown \n', 'tags': '', 'url': '延伸開發.html'}, {'title': '已知問題', 'text': 'cmsimde 是一套始終修改中的機械設計工程導向網際內容管理系統, 由於自 2013 年底開發至今, Python 已經從 3.6 進展到 3.9, 網際發展方向也從 html editor 趨向 markdown editor, WebGL 相關技術與 three.js 的整合也越發成熟. \n 因此面對 \n https://github.com/mdecourse/virtualkossel \n http://mde.tw/virtualkossel/ \n cmsimde 應該要導入更多動態零組件展示與互動相關的機械設計功能. \n 可以著力的方向: \n Fusion 360  \n https://github.com/AutodeskFusion360 \n https://stromberg.dnsalias.org/~strombrg/pybrowser/python-browser.html \n https://vpython.org/ \n https://www.glowscript.org/ \n https://github.com/slembcke/Chipmunk2D \n http://www.pymunk.org/en/latest/ \n https://github.com/mrjleo/python-physics-demos \n cango3d library:  https://www.arc.id.au/Canvas3DGraphics.html \n', 'tags': '', 'url': '已知問題.html'}, {'title': 'IPv6', 'text': '參考:  https://github.com/tinymce/tinymce/issues/4409  中的  url parsing 修改 後, 目前已經可以在 local 與 IPv6 網路連線中啟用 tinymce4 editor. \n', 'tags': '', 'url': 'IPv6.html'}, {'title': '上傳資料引用', 'text': '針對有特殊符號的上傳檔案名稱, 例如: Non-Programmer\'s_Tutorial_for_Python_3.pdf, 目前的 insert/edit link 編輯無法正確將此帶有 "\'" 的檔案引入 anchor 標註. \n 上傳檔案區的 keyword 查詢目前無法使用, 且上傳檔案的排序在不同操作系統中會產生不同順序排列. \n', 'tags': '', 'url': '上傳資料引用.html'}, {'title': 'MathJax', 'text': 'MathJax 引用問題: \n https://www.mathjax.org/ \n', 'tags': '', 'url': 'MathJax.html'}, {'title': 'html 分頁', 'text': '分頁失敗時會意外抹除 config\\content.htm 中的所有內容 \n 分頁失敗並不會提供 debug 建議 \n', 'tags': '', 'url': 'html 分頁.html'}, {'title': '靜態搜尋', 'text': '已知在帶有 Brython document.query[] 程式頁面架構下, 無法使用靜態網頁關鍵字搜尋. \n', 'tags': '', 'url': '靜態搜尋.html'}, {'title': 'template', 'text': 'cmsimde 針對利用 Flask 產生頁面並未使用 Template, 為了讓程式更加模組化可以考慮納入  Mako  template engine. \n', 'tags': '', 'url': 'template.html'}, {'title': '重複標題頁面', 'text': '已知重複標題頁面編輯時, 只能儲存前頁面的內容, 後續重複標題頁面無法在單頁模式編輯下更改標題與內容. 目前只能透過 Edit All 修改. \n', 'tags': '', 'url': '重複標題頁面.html'}, {'title': 'ajax', 'text': '共計有四個地方必須修改:  https://mde.tw/lab/blog/2021-kmol-cmsimde-ajax-editor-save.html \n 第一就是 sh4tinymce 長久以來的 bug. 可以透過 tinymce.activeEditor.setDirty(true); 知會 editor, 在 onSubmitFunction 將 highlighter 引用的程式碼插入 editor 時, 讓表單中的 Save 可以點擊. \n 另外兩項更動, 則是將 savePage 與 ssavePage 中移除跳行的程式碼, 予以註解. \n 最後一項修改則是 tinymce_editor() 函式: \n def tinymce_editor(menu_input=None, editor_content=None, page_order=None):\n    \n    """Tinymce editor scripts\n    """\n    \n    sitecontent =file_get_contents(config_dir + "content.htm")\n    editor = set_admin_css() + editorhead() + \'\'\'</head>\'\'\' + editorfoot()\n    # edit all pages\n    if page_order is None:\n        outstring = editor + "<div class=\'container\'><nav>" + \\\n                        menu_input + "</nav><section><form onsubmit=\'return save_all_data(this)\'> \\\n                        <textarea class=\'simply-editor\' name=\'page_content\' cols=\'50\' rows=\'15\'>" +  \\\n                        editor_content + "</textarea><input type=\'button\' onClick=\'save_all()\' value=\'save\'>"\n        outstring +="""\n        <script>\n        // leave  warning when modification not saved\n        window.addEventListener(\'beforeunload\', function(e) {\n        var myPageIsDirty = tinymce.activeEditor.isDirty()\n        if(myPageIsDirty) {\n            //following two lines will cause the browser to ask the user if they\n            //want to leave. The text of this dialog is controlled by the browser.\n            e.preventDefault(); //per the standard\n            e.returnValue = \'\'; //required for Chrome\n        }\n        //else: user is allowed to leave without a warning dialog\n        });\n        \n        function tempAlert(msg,duration)\n            {\n             var el = document.createElement("div");\n             el.setAttribute("style","position:absolute;top:40%;left:20%;background-color:lightgreen;");\n             el.innerHTML = msg;\n             setTimeout(function(){\n              el.parentNode.removeChild(el);\n             },duration);\n             document.body.appendChild(el);\n            }\n        \n        function save_all(){\n            tinymce.activeEditor.execCommand(\'mceSave\');\n        }\n        \n        function save_all_data(form) {\n                var page_content = $(\'textarea#page_content\').val();\n                \n                $.ajax({\n                    type: "POST",\n                    url: "/savePage",\n                    data: {"page_content": page_content},\n                    error: function(XMLHttpRequest, textStatus, errorThrown) {\n                        alert(XMLHttpRequest.status);\n                        alert(XMLHttpRequest.readyState);\n                        alert(textStatus);\n                    },\n                    success: function() {\n                        //document.getElementById("notice").innerHTML = "saved!";\n                        parser = new DOMParser();\n                        parsed = parser.parseFromString(page_content, \'text/html\');\n                        paragraphs = parsed.querySelectorAll(\'h1, h2, h3\');\n                        //alert(paragraphs.length)\n                        //tempAlert("saved!", 700);\n\n                        if (paragraphs.length > 1 || paragraphs.length == 0)\n                        {\n                            // when no title page will cause reload to error page\n                            //window.location.reload();\n                            document.location.href="/";\n                        }\n                        else\n                        {\n                            tempAlert("saved!", 700);\n                        }\n                    }\n                 }); \n        }\n        </script>\n        """\n        outstring += "</form></section></body></html>"\n    else:\n        # add viewpage button while single page editing\n        head, level, page = parse_content()\n        outstring = "<p id=\'notice\'></p>"\n        outstring  += editor + "<div class=\'container\'><nav>" + \\\n                        menu_input+"</nav><section><form onsubmit=\'return save_data(this)\'> \\\n                        <textarea class=\'simply-editor\' id=\'page_content\' name=\'page_content\' cols=\'50\' rows=\'15\'>" + \\\n                        editor_content + "</textarea><input type=\'hidden\'  id=\'page_order\' name=\'page_order\' value=\'" + \\\n                        str(page_order) + "\'>"\n        # add an extra collaborative save button\n        outstring += """<input type="button" onClick="ssave()"  value="save">"""\n        outstring += """<input type="button" onClick="cssave()"  value="csave">"""\n\n        outstring +="""\n        <script>\n        // leave  warning when modification not saved\n        window.addEventListener(\'beforeunload\', function(e) {\n        var myPageIsDirty = tinymce.activeEditor.isDirty()\n        if(myPageIsDirty) {\n            //following two lines will cause the browser to ask the user if they\n            //want to leave. The text of this dialog is controlled by the browser.\n            e.preventDefault(); //per the standard\n            e.returnValue = \'\'; //required for Chrome\n        }\n        //else: user is allowed to leave without a warning dialog\n        });\n        \n        function tempAlert(msg,duration)\n            {\n             var el = document.createElement("div");\n             el.setAttribute("style","position:absolute;top:40%;left:20%;background-color:lightgreen;");\n             el.innerHTML = msg;\n             setTimeout(function(){\n              el.parentNode.removeChild(el);\n             },duration);\n             document.body.appendChild(el);\n            }\n            \n        // default action is "save"\n        var action ="save";\n        \n        function cssave(){\n            action = "csave";\n            tinymce.activeEditor.execCommand(\'mceSave\');\n        }\n        \n        function ssave(){\n            action = "save";\n            tinymce.activeEditor.execCommand(\'mceSave\');\n        }\n        \n        function save_data(form) {\n                var page_content = $(\'textarea#page_content\').val();\n                var page_order = $(\'#page_order\').val();\n                \n                $.ajax({\n                    type: "POST",\n                    url: "/ssavePage",\n                    data: {"page_content": page_content, "page_order": page_order, "action": action},\n                    error: function(XMLHttpRequest, textStatus, errorThrown) {\n                        alert(XMLHttpRequest.status);\n                        alert(XMLHttpRequest.readyState);\n                        alert(textStatus);\n                    },\n                    success: function() {\n                        //document.getElementById("notice").innerHTML = "saved!";\n                        parser = new DOMParser();\n                        parsed = parser.parseFromString(page_content, \'text/html\');\n                        paragraphs = parsed.querySelectorAll(\'h1, h2, h3\');\n                        //alert(paragraphs.length)\n                        //tempAlert("saved!", 700);\n\n                        if (paragraphs.length > 1 || paragraphs.length == 0 )\n                        {\n                            //window.location.reload();\n                            document.location.href="/";\n                        }\n                        else\n                        {\n                            tempAlert("saved!", 700);\n                        }\n                    }\n                 }); \n        }\n        </script>\n        """\n        outstring += \'\'\'<input type=button onClick="location.href=\'/get_page/\'\'\' + \\\n                    head[page_order] + \\\n                    \'\'\'\'" value=\'viewpage\'></form></section></body></html>\'\'\'\n    return outstring\n    \n \n \n', 'tags': '', 'url': 'ajax.html'}, {'title': 'black', 'text': '準備 black 一下 cmsimde 原始碼:  https://github.com/psf/black \n', 'tags': '', 'url': 'black.html'}, {'title': 'summernote', 'text': 'https://github.com/summernote/summernote \n', 'tags': '', 'url': 'summernote.html'}, {'title': '空白', 'text': '', 'tags': '', 'url': '空白.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '期中考周 \n 無法推上去，錯誤碼443 \n \n 資料夾開啟\xa0cd2022\\data\\home_ipv6，將.gitconfig以SciTE開啟 \n \n 將#字號刪除並重新推送', 'tags': '', 'url': 'W9.html'}]};