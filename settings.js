/*

  !- Credits BY DANZXN
  https://wa.me/62895417637940
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '62895417637940'
global.versi = version
global.namaOwner = "𝘿𝘼𝙉𝙕𝙓𝙉 𝙎𝙏𝙊𝙍𝙀 "
global.packname = '𝘿𝘼𝙉𝙕𝙓𝙉'
global.botname = '𝘿𝘼𝙉𝙕𝙓𝙉 𝘾𝙋𝘼𝙉𝙀𝙇'
global.botname2 = '𝘿𝘼𝙉𝙕𝙓𝙉 𝘾𝙋𝘼𝙉𝙀𝙇'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/62895417637940"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029Vb09EKdCnA7jirrMFq42"
global.idSaluran = "120363356811907823@newsletter"
global.namaSaluran = "INFO YT:DANZXN"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.merchantIdOrderKuota = "OK2088243"
global.apiOrderKuota = ""
global.qrisOrderKuota = ""

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "dop_v1_2be09047075ba3c9c8a950eb7c796d099d2fbc1335c1c5c2e3c035b6588177e2"
global.apiSimpleBot = "simplebotz85"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "0895417637940"
global.ovo = "Tidak Tersedia"
global.gopay = "Tidak tersedia"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://file.btch.rf.gd/file/rie4bd9w6bzrvonoafyw.jpg", 
reply: "https://file.btch.rf.gd/file/rie4bd9w6bzrvonoafyw.jpg", 
logo: "https://file.btch.rf.gd/file/ievs8qcblab3bqxr3w13.jpg", 
qris: "https://img86.pixhost.to/images/610/565048535_rizzhosting.jpg"
}

//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://alwayszakzz-priv.zakzz.web.id"
global.apikey = "ptla_xQNtJm9mm6Vyv2s88LxARYSsBA3cy2XtJWqXuzPJQJC" //ptla
global.capikey = "ptlc_0demlwHzRLeGQDdusqTHNkGDvnXto8KMQmixoocflX8" //ptlc

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://zakzzkecebos.zakzz.web.id"
global.apikeyV2 = "ptla_pXjOqMhWO9JaQh1dLpPkvuyirLPInjtUDB5jCFj0ZW4" //ptla
global.capikeyV2 = "ptlc_5gHudjEdy8ovlf8GRMiJGNT0SCwVU9Kn8kn7sOWOxDV" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"danzxn.web.id": {
"zone": "f03f53db577f9545de13fd86f182f938",
"apitoken": "W00XNUPO_Sae5J2m6G1FE2zayqF3iVcoPXQ1vgu6"
},
"danzxn.my.id": {
"zone": "7ecc5f152059359a9be48db2e01620c5",
"apitoken": "xPWcIMNRs-lSswgCT1NyXNCaq9TeN7ykUlgnVCH8",
},
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk owner bot!",
	admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Akses Ditolak ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
