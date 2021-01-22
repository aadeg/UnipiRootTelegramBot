var { emojify } = require('node-emoji');

const start = emojify(
  "<b>Ciao!</b> Usa /list per vedere l'elenco di tutti i gruppi Telegram :wink:"
);

const list = emojify(`
Puoi consultare la lista del tuo corso di laura eseguendo il relativo comando:

/informatica Ing. Informatica

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
<a href="https://t.me/joinchat/AAAAAEHdvxGvPYyfEWYopQ">:radio: Comunicazioni numeriche</a>
:electric_plug: Elettronica digitale (non disponibile)
:love_letter: Progettazioni di reti (non disponibile)
<a href="https://t.me/joinchat/DP4y8g4TrvNtOnLXbSPgXw">:coffee: Programmazione</a>
<a href="https://t.me/joinchat/BrkrO0Jdg2BQcqPEeeNSPw">:package: Reti informatiche</a>
<a href="https://t.me/joinchat/C6lolENUqEA944VwYoaZ2A">:vertical_traffic_light: Sistemi operativi</a>
<a href="https://t.me/joinchat/CLsD7hdrCpwyk3_eDqQxrw">:triangular_ruler: Ingegneria del software</a>

<b>Extra</b>
<a href="https://t.me/joinchat/AnWsLRDWt_mF_4hSuJe1OA">:closed_lock_with_key: Crittografia</a>

<b>Magistrali</b>
<a href="https://t.me/joinchat/BK0BTRGED9l1HKoXRLWfjw">Computer Engineer</a>
<a href="https://t.me/joinchat/A6S5hhOKF64s62zf2kJIxQ">AIDE</a>
<a href="https://t.me/joinchat/D0ZgAxjCooSachHyMU9mlg">Cybersecurity</a>

<i>Vuoi aggiungere un gruppo alla lista?</i> <a href="tg://user?id=70021520">Scrivimi</a>
`);

module.exports = {
  start,
  list,
  informatica,
  faq
};