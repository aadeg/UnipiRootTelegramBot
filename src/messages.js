var { emojify } = require('node-emoji');

const start = emojify(
  "<b>Ciao!</b> Usa /list per vedere l'elenco di tutti i gruppi Telegram :wink:"
);

const list = emojify(`
Puoi consultare la lista del tuo corso di laura eseguendo il relativo comando:

/informatica Ing. Informatica
/aide AIDE

<i>Vuoi aggiungere un corso di laurea alla lista?</i> <a href="tg://user?id=70021520">Scrivimi</a>
`);

const faq = emojify(`
<b>A cosa serve questo bot?</b>
In questi mesi si sono creati spontaneamente alcuni gruppi nei quali chiedere aiuto durante la preparazione di un esame, rimanere aggiornati sulle novità o semplicemente condividere il proprio male di vivere. Questo bot ha il semplice scopo di raccogliere in un unico luogo i link per accedere a questi gruppi.

<b>Come faccio ad aggiungere un gruppo alla lista?</b>
Per aggiungere un gruppo alla lista, inviami in privato (<a href="tg://user?id=70021520">qui</a>) il link di invito al gruppo.

<b>Perché Anno 0 e non Anno 1?</b>
Siamo ad ingegneria informatica :grin:

<b>Come è stato realizzato il bot?</b>
Il progetto è open-source e puoi trovare il codice sorgente su <a href="https://github.com/aadeg/UnipiRootTelegramBot">GitHub</a>. Il bot è hostato su <a href="https://cloud.google.com/functions/">Google Cloud Functions</a>.
`);

const informatica = emojify(`
<b>Anno 0</b>
<a href="https://t.me/joinchat/F-kdalB7A1yFVCnJD8EhpA">:link: Algoritmi</a>
<a href="https://t.me/joinchat/Hcht5xDIHU-kQrGmR-L21A">:two_hearts: Analisi 2</a>
<a href="https://t.me/joinchat/F-kdak12Fr8qHp5QiU7EHg">:floppy_disk: Basi di dati</a> (<a href="https://t.me/joinchat/ALDXWBVYpL2l84JHdnXoOw">progetto 2019</a>)
<a href="https://t.me/joinchat/A0wv9EhCN2CjcIZebsS1RQ">:apple: Fisica generale</a>
:pencil2: Algebra (non disponibile)
<a href="https://t.me/fondamenti_di_programmazione">:computer: Fondamenti di programmazione</a>

<b>Anno 1</b>
<a href="https://t.me/joinchat/DP4y8grSZBsk1YzDw-NCew">:video_game: Calcolatori elettronici</a>
<a href="https://t.me/cnunipi">:clipboard: Calcolo Numerico</a>
<a href="https://t.me/joinchat/AAAAAArREhurO44Fc--MGw">:moneybag: Economia</a>
<a href="https://t.me/joinchat/AAAAAAuvvBo0m7aeqpAn6g">:zap: Elettrotecnica</a>
<a href="https://t.me/joinchat/AAAAAAzFfSh5cwB9ldDIfw">:car: Fondamenti di automatica</a>
<a href="https://t.me/joinchat/DP4y8g1bKe4l--I_YqIevQ">:spider_web: Progettazione Web</a>
<a href="https://t.me/joinchat/DP4y8gqAxH6Kc2gyDlUdBg">:skull: Reti logiche</a>
<a href="https://t.me/joinchat/CNsBexXjeejb0JYbOmHtsw">:mag: Ricerca operativa</a>

<b>Anno 2</b>
<a href="https://t.me/joinchat/Qd2_EWQ-DwGCCvlU">:radio: Comunicazioni numeriche</a>
:electric_plug: Elettronica digitale (non disponibile)
<a href="https://t.me/joinchat/TZIixPTvkuDYk0hc">:love_letter: Progettazione di reti</a>
<a href="https://t.me/joinchat/DP4y8g4TrvNtOnLXbSPgXw">:coffee: Programmazione</a>
<a href="https://t.me/joinchat/BrkrO0Jdg2BQcqPEeeNSPw">:package: Reti informatiche</a>
<a href="https://t.me/joinchat/C6lolENUqEA944VwYoaZ2A">:vertical_traffic_light: Sistemi operativi</a>
<a href="https://t.me/joinchat/CLsD7hdrCpwyk3_eDqQxrw">:triangular_ruler: Ingegneria del software</a>

<b>Extra</b>
<a href="https://t.me/joinchat/lgdEFFWRnaw1ZmM8">:closed_lock_with_key: Crittografia</a>

<b>Magistrali</b>
<a href="https://t.me/joinchat/BK0BTRGED9l1HKoXRLWfjw">Computer Engineer</a>
<a href="https://t.me/joinchat/A6S5hhOKF64s62zf2kJIxQ">AIDE</a>
<a href="https://t.me/joinchat/D0ZgAxjCooSachHyMU9mlg">Cybersecurity</a>

<i>Vuoi aggiungere un gruppo alla lista?</i> <a href="tg://user?id=70021520">Scrivimi</a>
`);

const aide = emojify(`
<b>Year 1</b>
<a href="https://t.me/UNIPI_data_mining">:pick: Data Mining</a>
<a href="https://t.me/UNIPI_large_scale_databases">:books: Large Scale Databases</a>
<a href="https://t.me/UNIPI_cloud_computing">:cloud: Cloud Computing</a>
<a href="https://t.me/UNIPI_optimization_methods">:game_die: Opt Methods and Game Theory</a>
<a href="https://t.me/UNIPI_business_and_project_mngmt">:money_mouth_face: Business and Project Management</a>

<b>Year 2</b>
<a href="https://t.me/UNIPI_process_mining">:construction_worker: Process Mining</a>
<a href="https://t.me/UNIPI_multimedia_inf_retr_and_cv">:robot_face: Multimedia Information Retrieval and Computer Vision</a>
<a href="https://t.me/UNIPI_comp_intell_and_deep_lrnin">:brain: Computational Intelligence and Deep Learning</a>
<a href="https://t.me/joinchat/2-g7AnXa-WExNjZk">:genie: Symbolic and Evolutionary Artificial Intelligence</a>

<b>Telegram Groups Group A</b>
<a href="https://t.me/+KM4Wu6hEQIViYTY0">:iphone: Mobile and Social Sensing Systems</a>

<b>Students' Material Repo</b>
:white_check_mark: :books: <a href="https://github.com/Ruggero1912/AIDE-unipi">Course repo</a>: notes to study on, links to students' public projects, collections of oral questions. 
:star: - share your projects and / or notes
:heavy_check_mark: - can contribute with Pull Requests
:mega: - mantainers needed


<i>Whishing to add a group in the list?</i> <a href="tg://user?id=70021520">Send me a PM</a>
`);

const computerEngineering = emojify(`
<b>Year 1</b>
<a href="https://t.me/UNIPI_large_scale_databases">:books: Large Scale Databases</a>
<a href="https://t.me/UNIPI_cloud_computing">:cloud: Cloud Computing</a>
<a href="https://t.me/Performance_evaluation_unipi">:gear: Performance Evaluation</a>
<a href="https://t.me/Electronic_and_communication">:zap: Electronics and Communication Systems</a>
<a href="https://t.me/Computer_architecture_unipi">:computer: Computer Architecture</a>
<a href="https://t.me/Intelligence_systems">:deaf_woman: Intelligent System</a>
<a href="https://t.me/Foundations_of_cybersecurity">:safety_vest: Foundations of Cybersecurity</a>
<a href="https://t.me/formal_Methds_FMFSS">:helmet_with_white_cross: Formal Methods For Secure Systems</a>


<b>Year 2</b>
<a href="https://t.me/Distributed_systems_unipi">:keyboard: Distributed Systems and MIddleware Technologies</a>
<a href="https://t.me/Software_systems_engineering">:three_button_mouse: Software Systems Engineering</a>

<b>Group A</b>
<a href="https://t.me/+KM4Wu6hEQIViYTY0">:iphone: Mobile and Social Sensing Systems</a>
<a href="https://t.me/Advanced_network_architecture">:nerd_face: Advanced Network Architectures and Wireless Systems</a>
<a href="https://t.me/iotUNiPi2023">:beetle: Internet of Things</a>

<b>Extra</b>
<a href="https://t.me/joinchat/C2zgqFiWJJAu3p-mDhkQ-w">Computer Engineer 2019/20</a>
<a href="https://t.me/CEUnipi">Computer Engineer 2020/21</a>
<a href="https://t.me/CEUnipi2021">Computer Engineer 2021/22</a>


`);

module.exports = {
  start,
  list,
  informatica,
  aide,
  computerEngineering,
  faq
};
