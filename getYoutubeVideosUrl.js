/*
* @Author: qy
* @Date:   2018-12-07 13:04:33
* @Last Modified by:   yuze.xia
* @Last Modified time: 2018-12-17 08:11:41
*/
let originUrl = document.getElementsByTagName('ytd-grid-video-renderer')[0].getElementsByTagName('ytd-thumbnail')[0].getElementsByClassName('yt-simple-endpoint')[0].origin;
var targetUrl = document.getElementsByTagName('ytd-grid-video-renderer')[0].getElementsByTagName('ytd-thumbnail')[0].getElementsByClassName('yt-simple-endpoint')[0].getAttribute('href');
var targetUrl = document.getElementsByTagName('ytd-grid-video-renderer')[0].getElementsByTagName('ytd-thumbnail')[0].getElementsByClassName('yt-simple-endpoint')[0].search;

var targetUrl = document.getElementsByTagName('ytd-grid-video-renderer')[0].getElementsByClassName('yt-simple-endpoint')[0].href

// 获取页面元素，然后获取a链接内的链接
// 父元素tag ytd-grid-video-renderer
// ytd-thumbnail
// a元素 yt-simple-endpoint



// 通过class获取元素
function getTarget(parent, className) {
	return parent.getElementsByClassName(className)
}


function getYoutubeVidesUrl(parentElement, className) {
	let parentCollection = document.getElementsByTagName(parentElement),
		_arr = [];
	[].forEach.call(parentCollection, function(item) {
		let _target = getTarget(item, className);
		_arr.push(_target[0].href);
	})
	return _arr;
}

function getYoutubeVidesUrl(parentElement, className) {
	let parentCollection = Array.from(document.getElementsByTagName(parentElement)),
		_arr = [];
	parentCollection.forEach(function(item) {
		let _target = getTarget(item, className);
		_arr.push({
			title: _target[1].innerText,
			url: _target[0].href
		});
	})
	return _arr;
}

getYoutubeVidesUrl('ytd-grid-video-renderer', 'yt-simple-endpoint')








/*
BJ 쏘님 youtube视频
https://www.youtube.com/watch?v=N7oP7p1kW6I&t=6s
https://www.youtube.com/watch?v=4cfAN86Dgf8
https://www.youtube.com/watch?v=VFgppWl6lW8
https://www.youtube.com/watch?v=R-3wv87wpYQ
https://www.youtube.com/watch?v=GbJNt7maZ-w
https://www.youtube.com/watch?v=Q4hcinZo8LY
https://www.youtube.com/watch?v=MublFsbj9_c
https://www.youtube.com/watch?v=G4ysN3ycTkY
https://www.youtube.com/watch?v=5wI5JIVgvjk
https://www.youtube.com/watch?v=pF6Gg29Lnqc
https://www.youtube.com/watch?v=7LR_350L6v4
https://www.youtube.com/watch?v=omCj7cniSIo
https://www.youtube.com/watch?v=sq0Vbtymmco
https://www.youtube.com/watch?v=aFVNa04L6vA
https://www.youtube.com/watch?v=HeLSck_8joY
https://www.youtube.com/watch?v=ibLEx2LPRK0
https://www.youtube.com/watch?v=npvOejxlhLU
https://www.youtube.com/watch?v=sm_5BLfzfek&t=2s
https://www.youtube.com/watch?v=qYR9bJAFZ-o
https://www.youtube.com/watch?v=ZXWSJiQR0VA





https://www.youtube.com/watch?v=bRfhOoR1cHQ
https://www.youtube.com/watch?v=vSv2wvo_Pik
https://www.youtube.com/watch?v=NWp7KFoQovo
https://www.youtube.com/watch?v=c1YL2_KSRpw
https://www.youtube.com/watch?v=da7QtWX9tOs
https://www.youtube.com/watch?v=9jtiuIi6p9c
https://www.youtube.com/watch?v=V29A3sa2Vmc
https://www.youtube.com/watch?v=qFrbJEd99IE
https://www.youtube.com/watch?v=2o_emoOAGhs
https://www.youtube.com/watch?v=gXZIQREn7W8
https://www.youtube.com/watch?v=E9WcJrHx2i0
https://www.youtube.com/watch?v=O5tvsOAeZyY
https://www.youtube.com/watch?v=dmQ4Vt63VCs
https://www.youtube.com/watch?v=bol1bwoEBfk
https://www.youtube.com/watch?v=rPFVMzZHm_Y
https://www.youtube.com/watch?v=nENAYoxsMi4
https://www.youtube.com/watch?v=hpBuxAbRqaQ
https://www.youtube.com/watch?v=ohzUaEiW93g
https://www.youtube.com/watch?v=qnO2BBcxC7M
https://www.youtube.com/watch?v=Xj8pgq23PWk





https://www.youtube.com/watch?v=STcTV-Ebdno
https://www.youtube.com/watch?v=FbO_Vu2J1-k
https://www.youtube.com/watch?v=SuVLeFxwjVc
https://www.youtube.com/watch?v=JsSJYFvFPcw
https://www.youtube.com/watch?v=Gtaa7eJhoag
https://www.youtube.com/watch?v=z1jb9uoOG9s
https://www.youtube.com/watch?v=uUZZi_NM4q8
https://www.youtube.com/watch?v=r4PnJjC1J8U
https://www.youtube.com/watch?v=whNmbNE7AUI
https://www.youtube.com/watch?v=xQIEkiJCwck
https://www.youtube.com/watch?v=ScEVFsF6KY4
https://www.youtube.com/watch?v=gJbfVWPRc0c
https://www.youtube.com/watch?v=vf0xaO-8tKQ
https://www.youtube.com/watch?v=1JCudGPmJdU
https://www.youtube.com/watch?v=OqxVEH0N8nQ
https://www.youtube.com/watch?v=YcQ4SMcIrDU
https://www.youtube.com/watch?v=2TorxykEFj8
https://www.youtube.com/watch?v=jTiBaOUtUAw
https://www.youtube.com/watch?v=Omyc5AEoTX4
https://www.youtube.com/watch?v=0Glmzx-8YQE
https://www.youtube.com/watch?v=8SIPE-bNKAs
https://www.youtube.com/watch?v=-Sh9z5rPMvw
https://www.youtube.com/watch?v=g3o-XPkwdZQ
https://www.youtube.com/watch?v=MkEQ-cAb9P4
https://www.youtube.com/watch?v=3IVLuXqpr-c
https://www.youtube.com/watch?v=DBnfocav2Dc
https://www.youtube.com/watch?v=wriQDXk9VIk
https://www.youtube.com/watch?v=4URFosnl1wU
https://www.youtube.com/watch?v=x9O8cZbomXI
https://www.youtube.com/watch?v=aIRoN7IKIQk
https://www.youtube.com/watch?v=1n8Js-3ifb8
https://www.youtube.com/watch?v=hyK1o2N0ED0
https://www.youtube.com/watch?v=xaAhqM1mJkQ
https://www.youtube.com/watch?v=3Zb-qmdKg2Q
https://www.youtube.com/watch?v=pTgP6T3h5yc
https://www.youtube.com/watch?v=B3eaCyC-T2s
https://www.youtube.com/watch?v=yHehY1OBrrY
https://www.youtube.com/watch?v=34fQ9ewDvhY
https://www.youtube.com/watch?v=7C8sCWt2Ce8
https://www.youtube.com/watch?v=7m8tRvoD_MA
https://www.youtube.com/watch?v=iPo2cdI-7Do
https://www.youtube.com/watch?v=c5ixLE3P2Qs
https://www.youtube.com/watch?v=lPgKq4HcSGc
https://www.youtube.com/watch?v=4VvB4u1lweI
https://www.youtube.com/watch?v=GXOsoLvSUkI
https://www.youtube.com/watch?v=pJ_mHAbWqIg
https://www.youtube.com/watch?v=OvSJ2-zmjS4
https://www.youtube.com/watch?v=0ugQdtbRwVc
https://www.youtube.com/watch?v=NBCwW6ozolA
https://www.youtube.com/watch?v=34aADEYRkIc
https://www.youtube.com/watch?v=aTJZcwoE9Os
https://www.youtube.com/watch?v=wdCk49o1lHU
https://www.youtube.com/watch?v=a-ytwmkkyrU
https://www.youtube.com/watch?v=URae2fEELqo
https://www.youtube.com/watch?v=tCJ-6oEawH4
https://www.youtube.com/watch?v=jXLMd7z6rxU
https://www.youtube.com/watch?v=gGmC5NWrXOU
https://www.youtube.com/watch?v=DSzm6Oor3Gw
https://www.youtube.com/watch?v=3d79JMSmLWs
https://www.youtube.com/watch?v=917Ba9nnsnA










https://www.youtube.com/watch?v=8HrsOChPF4w
https://www.youtube.com/watch?v=m8vwI8Q7NLc
https://www.youtube.com/watch?v=PhYn8xU24CY
https://www.youtube.com/watch?v=3b9ZKBWrNss
https://www.youtube.com/watch?v=y3_OtJHb7LI
https://www.youtube.com/watch?v=VnC01tNMhbw
https://www.youtube.com/watch?v=6Nckto9hMMA
https://www.youtube.com/watch?v=LMW3IfLflJE
https://www.youtube.com/watch?v=aZ3urYAaN-g
https://www.youtube.com/watch?v=Pc1huBOaTDM
https://www.youtube.com/watch?v=0a747Us4tZI
https://www.youtube.com/watch?v=WVBzEQ93yCQ
https://www.youtube.com/watch?v=ozp361p-URc
https://www.youtube.com/watch?v=kZJbfXB51UE
https://www.youtube.com/watch?v=YSE1A4195FI
https://www.youtube.com/watch?v=pXdyJSXK-ek
https://www.youtube.com/watch?v=K4WTdM0_9fM
https://www.youtube.com/watch?v=ZdOZ5MI9bLw
https://www.youtube.com/watch?v=SN5Ra_P8W6A
https://www.youtube.com/watch?v=E3V3QKsXH5U
https://www.youtube.com/watch?v=4dB8GINcEfc
https://www.youtube.com/watch?v=qq-J4QdgoAg
https://www.youtube.com/watch?v=LPtcVq_hShg
https://www.youtube.com/watch?v=9RageGvPXV0
https://www.youtube.com/watch?v=0aruknbuz-4
https://www.youtube.com/watch?v=zHLsF_mf334
https://www.youtube.com/watch?v=w-gv1wpyrO4
https://www.youtube.com/watch?v=ZMqmsezZ464
https://www.youtube.com/watch?v=EHOsESl4icM
https://www.youtube.com/watch?v=oZ9ZDsAUOYM
https://www.youtube.com/watch?v=zYlm9K0U2QA
https://www.youtube.com/watch?v=eJt8UMGA6WQ
https://www.youtube.com/watch?v=_vZiwdznTmw
https://www.youtube.com/watch?v=lkdcLk11GF8
https://www.youtube.com/watch?v=4BVLrAakW8E
https://www.youtube.com/watch?v=310bc_OP8vY
https://www.youtube.com/watch?v=Y3rq2XEHawI
https://www.youtube.com/watch?v=cpjvq1hsVbc
https://www.youtube.com/watch?v=Yw-G4M3n8JA
https://www.youtube.com/watch?v=Znlmzctx6pw
https://www.youtube.com/watch?v=4-9cDUVoDn8
https://www.youtube.com/watch?v=T1hT85aQ3XE
https://www.youtube.com/watch?v=0fBIY9-KCxY
https://www.youtube.com/watch?v=-ho7ruMsKM4
https://www.youtube.com/watch?v=9pH4KKLauFM
https://www.youtube.com/watch?v=bmIpWnd23JU
https://www.youtube.com/watch?v=teoZvA8CLEY
https://www.youtube.com/watch?v=wHeb-lRdTeQ
https://www.youtube.com/watch?v=4K_C3kb0Tzo
https://www.youtube.com/watch?v=V01e9NuA4ls
https://www.youtube.com/watch?v=mPfB1SvaqGo
https://www.youtube.com/watch?v=RuapdfhPRjo
https://www.youtube.com/watch?v=H0aPuq44ONM
https://www.youtube.com/watch?v=TrYIIBeHOEI
https://www.youtube.com/watch?v=IPq9JFQ4FZk
https://www.youtube.com/watch?v=hwEGBfQb92s
https://www.youtube.com/watch?v=MIrJvxwwLqU
https://www.youtube.com/watch?v=dPOtq1KB0KA
https://www.youtube.com/watch?v=9hEfgPTC52o
https://www.youtube.com/watch?v=IeHR1YlWf_k
https://www.youtube.com/watch?v=8Uc-dLfrst8
https://www.youtube.com/watch?v=0RAYo1HKJZY
https://www.youtube.com/watch?v=UC7P20pCIGw
https://www.youtube.com/watch?v=NVyZp4SKeBs
https://www.youtube.com/watch?v=7EAUGpQ8CgA
https://www.youtube.com/watch?v=eCGfGR4qvg4
https://www.youtube.com/watch?v=ck-koM2gaws
https://www.youtube.com/watch?v=SZSjC0o9MPs
https://www.youtube.com/watch?v=UppARapDceI
https://www.youtube.com/watch?v=h5YCyq4qjuo
https://www.youtube.com/watch?v=_-EBCeSXZTU
https://www.youtube.com/watch?v=x_cEvcB3ZvI
https://www.youtube.com/watch?v=P63uZrPAMV8
https://www.youtube.com/watch?v=b7oteIWmIek
https://www.youtube.com/watch?v=-rtoijomWpQ
https://www.youtube.com/watch?v=bHsWexj1aA8
https://www.youtube.com/watch?v=RL3EeLmNjK0
https://www.youtube.com/watch?v=OwzF1Vjzg3M
https://www.youtube.com/watch?v=z6YqYxRhZlY
https://www.youtube.com/watch?v=1jvq8Xs-OsY
https://www.youtube.com/watch?v=j9oY0nb2YFg
https://www.youtube.com/watch?v=vA0_B8P76iI
https://www.youtube.com/watch?v=ima3FsIomAM
https://www.youtube.com/watch?v=vYu-Pwpyhns
https://www.youtube.com/watch?v=EyCpbcLKvmU
https://www.youtube.com/watch?v=IEjf_d158JE
https://www.youtube.com/watch?v=upwfcz8n5NM
https://www.youtube.com/watch?v=6kFMxEwo_n4
https://www.youtube.com/watch?v=JrYxYgct880
https://www.youtube.com/watch?v=vdv-Z_fIxG0
https://www.youtube.com/watch?v=2NE5fNLRr0g
https://www.youtube.com/watch?v=RlVXxO-kaZk
https://www.youtube.com/watch?v=Toj4EPh7slg
https://www.youtube.com/watch?v=JDjyx9rA5HA
https://www.youtube.com/watch?v=e6U0qMc5TXo
https://www.youtube.com/watch?v=TpqwrpsZaLI
https://www.youtube.com/watch?v=pLPYXbVH7kc
https://www.youtube.com/watch?v=8mLR1Fkohoc
https://www.youtube.com/watch?v=UPDj1wk3uIo
https://www.youtube.com/watch?v=qP7aIpB7MZk
https://www.youtube.com/watch?v=_q7oq4lI0YU
https://www.youtube.com/watch?v=ZYMeREHrhWw
https://www.youtube.com/watch?v=iD1Z9ECY4J0
https://www.youtube.com/watch?v=UOdqflMm3B0
https://www.youtube.com/watch?v=ZseHpHdEhKc
https://www.youtube.com/watch?v=sq0msCBco08
https://www.youtube.com/watch?v=gI5Qu2maeak
https://www.youtube.com/watch?v=7T6sKPzEjVM
https://www.youtube.com/watch?v=FmkZMJxj-SQ
https://www.youtube.com/watch?v=5D9JpIdhB_E
https://www.youtube.com/watch?v=uNoz03v76wQ
https://www.youtube.com/watch?v=-jggeQnpaDs
https://www.youtube.com/watch?v=0S-BBItelUI
https://www.youtube.com/watch?v=96XjerIOLVM
https://www.youtube.com/watch?v=SDj2mh9yhHQ
https://www.youtube.com/watch?v=iIhh32xRTWk
https://www.youtube.com/watch?v=lta9oQRWbsc
https://www.youtube.com/watch?v=z2FjJ4c0WEA
https://www.youtube.com/watch?v=pU5QrIqQ320
https://www.youtube.com/watch?v=T5O5GFJmCSQ
https://www.youtube.com/watch?v=Kmsw-rY0S5Y
https://www.youtube.com/watch?v=kshPEMViZsk
https://www.youtube.com/watch?v=yRr9ew_h6Ek
https://www.youtube.com/watch?v=1vFrQiVXhoU
https://www.youtube.com/watch?v=MUFKcGoT_w4
https://www.youtube.com/watch?v=LccFfSIZxDI
https://www.youtube.com/watch?v=UjhcOneOYr8
https://www.youtube.com/watch?v=Ch0fzkyMvuA
https://www.youtube.com/watch?v=PSMLIYlnl7I
https://www.youtube.com/watch?v=rZdt-HGnyuo
https://www.youtube.com/watch?v=noCl2wtDp2A
https://www.youtube.com/watch?v=sfFg5N27u-U
https://www.youtube.com/watch?v=uRcoCZlk0bM
https://www.youtube.com/watch?v=WNpblQ3BFVM
https://www.youtube.com/watch?v=WV50J8403TA
https://www.youtube.com/watch?v=nTdRvMeDO74
https://www.youtube.com/watch?v=ZNv2TaET444
https://www.youtube.com/watch?v=eNlCJeOiUiI
https://www.youtube.com/watch?v=SpPs8nlf4fs
https://www.youtube.com/watch?v=Fr23vdpDlao
https://www.youtube.com/watch?v=xNC4egrpQDo
https://www.youtube.com/watch?v=C36ZoGN1gcs
https://www.youtube.com/watch?v=ZhcFz8JSHyo
https://www.youtube.com/watch?v=P9sSUoT8MIQ
https://www.youtube.com/watch?v=kmW1F7Au0pY
https://www.youtube.com/watch?v=Gs3h377DLKs
https://www.youtube.com/watch?v=bF6C4ygfR5E
https://www.youtube.com/watch?v=_jv6gdSXgRc
https://www.youtube.com/watch?v=1aQeOSsxEZk
https://www.youtube.com/watch?v=s-M6Gm_vFH4
https://www.youtube.com/watch?v=LvOYuGhhxCY
https://www.youtube.com/watch?v=Bve3qH2Sa50
https://www.youtube.com/watch?v=ntYAuo7CnXk
https://www.youtube.com/watch?v=5OovVw2TpRY
https://www.youtube.com/watch?v=Mok7k-oNpSg
https://www.youtube.com/watch?v=pF3w0C1FpcQ
https://www.youtube.com/watch?v=DtdNtnvDU3M
https://www.youtube.com/watch?v=usoDM51AuGU
https://www.youtube.com/watch?v=izA3vOHJsSc
https://www.youtube.com/watch?v=y6vrFZYFAOQ
https://www.youtube.com/watch?v=M3G_ebpQ30k
https://www.youtube.com/watch?v=0b4GTh5vRlg
https://www.youtube.com/watch?v=HIcGWtM9jaI
https://www.youtube.com/watch?v=75DMyfN2zoc
https://www.youtube.com/watch?v=hVqaq6aDQjQ
https://www.youtube.com/watch?v=g1yAm5I5ffM
https://www.youtube.com/watch?v=4fLbKUQwoOQ
https://www.youtube.com/watch?v=KwrWKljeVoU
https://www.youtube.com/watch?v=bLqZnPK_Esw
https://www.youtube.com/watch?v=Vpa4-7ebTIQ
https://www.youtube.com/watch?v=xuLDPxVFyrA
https://www.youtube.com/watch?v=GykbCiRshbM
https://www.youtube.com/watch?v=LExARlIyfKs
https://www.youtube.com/watch?v=zIczg_YiRok
https://www.youtube.com/watch?v=k1F4ZaXZe0E
https://www.youtube.com/watch?v=aM5yqPr7j9g
https://www.youtube.com/watch?v=xAdmmmkygvY
https://www.youtube.com/watch?v=XMXqwUqGni0
https://www.youtube.com/watch?v=WMdwVCnk5kg
https://www.youtube.com/watch?v=ICUZmSXiwdM
https://www.youtube.com/watch?v=t6T9IC3picI
https://www.youtube.com/watch?v=Madg5DjheJw
https://www.youtube.com/watch?v=cxKRvOsrIBw
https://www.youtube.com/watch?v=MA143hdbdHk
https://www.youtube.com/watch?v=W4Znltp-mOA
https://www.youtube.com/watch?v=th-0GUz2PJQ
https://www.youtube.com/watch?v=1cRy-WzN1ow
https://www.youtube.com/watch?v=tfQNCyOHcio
https://www.youtube.com/watch?v=43orEgMMI18
https://www.youtube.com/watch?v=b-uy_Mi1_rA
https://www.youtube.com/watch?v=mNtqIMikw_s
https://www.youtube.com/watch?v=axfDWhBzLgA
https://www.youtube.com/watch?v=TXaIhFAPe0c
https://www.youtube.com/watch?v=FdBDOW4K16c
https://www.youtube.com/watch?v=B5i1-uQ7cnI
https://www.youtube.com/watch?v=S-S2zKp2I4Q
https://www.youtube.com/watch?v=31r5V_EzKLY
https://www.youtube.com/watch?v=VfIl66v_3LU
https://www.youtube.com/watch?v=FZsKotn6CnA
https://www.youtube.com/watch?v=R8hyu324mus
https://www.youtube.com/watch?v=gK2o5d5uevM
https://www.youtube.com/watch?v=uD2hKfDpgoY
https://www.youtube.com/watch?v=FXqTTLK43Pw
https://www.youtube.com/watch?v=xLKZAhKbu1I
https://www.youtube.com/watch?v=Ze41sQ3-LIU
https://www.youtube.com/watch?v=vzZ581FrEQc
https://www.youtube.com/watch?v=KYwsD0S6-i8
https://www.youtube.com/watch?v=KEo7kSiOBQI
https://www.youtube.com/watch?v=Qr5EL_uCWD4
https://www.youtube.com/watch?v=9ukN9qTRA-c
https://www.youtube.com/watch?v=pYSNzZKNRdI
https://www.youtube.com/watch?v=uv-LDQWlEm0
https://www.youtube.com/watch?v=6SfAHIM6yH8
https://www.youtube.com/watch?v=gnVNumrvV_s
https://www.youtube.com/watch?v=shVkiPSNIbk
https://www.youtube.com/watch?v=JxZe2v_LfsE
https://www.youtube.com/watch?v=pgXJX1VudVk
https://www.youtube.com/watch?v=wHWPrJ5Y7Ec
https://www.youtube.com/watch?v=-NYyxRdExoQ
https://www.youtube.com/watch?v=dJtOw3HaRgs
https://www.youtube.com/watch?v=FI_SWRgR1Cg
https://www.youtube.com/watch?v=Fhp5f7ZIDTs
https://www.youtube.com/watch?v=7U806oZtDBA
https://www.youtube.com/watch?v=QK0QQZPTCBE
https://www.youtube.com/watch?v=_z_64WVlySQ
https://www.youtube.com/watch?v=HwizLPOuuVo
https://www.youtube.com/watch?v=FCfyIHAOpMo
https://www.youtube.com/watch?v=Wafxtb9yGUI
https://www.youtube.com/watch?v=pJun4M7Pzwk
https://www.youtube.com/watch?v=5RgYAB0ed_8
https://www.youtube.com/watch?v=Zvnigvh5nNs
https://www.youtube.com/watch?v=cPFEDEy1ONA
https://www.youtube.com/watch?v=aS-VjmUMQJw
https://www.youtube.com/watch?v=dRHKsEEPLJA
https://www.youtube.com/watch?v=9cI7YbkZ4GY
https://www.youtube.com/watch?v=cvk0Z_Fukss
https://www.youtube.com/watch?v=ES98vYimVnU
https://www.youtube.com/watch?v=Ov8Tkz3CIBI
https://www.youtube.com/watch?v=xYugl_q-cLA
https://www.youtube.com/watch?v=U5B2x9cPrcw
https://www.youtube.com/watch?v=hv9eHWVJNxg
https://www.youtube.com/watch?v=5kKr9hkSFng
https://www.youtube.com/watch?v=-NmielRnrrY
https://www.youtube.com/watch?v=P0x6h-bwym4
https://www.youtube.com/watch?v=uPsPVmFYAdI
https://www.youtube.com/watch?v=-e_AYoPuISY
https://www.youtube.com/watch?v=Xayalh4H9UA
https://www.youtube.com/watch?v=SnRMj_fnExg
https://www.youtube.com/watch?v=j14T6W3SSME
https://www.youtube.com/watch?v=1uW7nZw9-B0
https://www.youtube.com/watch?v=yIaqMg0_AuI
https://www.youtube.com/watch?v=AEgt-B7kAG4
https://www.youtube.com/watch?v=FLGfhtsI-lw
https://www.youtube.com/watch?v=Bf7jT1YGpE4
https://www.youtube.com/watch?v=h8aEpHQHQyU
https://www.youtube.com/watch?v=069V52KOPZ0
https://www.youtube.com/watch?v=R408fDMKYug
https://www.youtube.com/watch?v=O_JEKz2WbCQ
https://www.youtube.com/watch?v=su-MJFGLWDo
https://www.youtube.com/watch?v=a63P1TpLsRw
https://www.youtube.com/watch?v=lKUrHZbw9RY
https://www.youtube.com/watch?v=diUsRpdwz20
https://www.youtube.com/watch?v=H9qUw1d7Hks
https://www.youtube.com/watch?v=O2R50W7MACo
https://www.youtube.com/watch?v=5uzbZwSBqjA
https://www.youtube.com/watch?v=cbYlGsuuxzw
https://www.youtube.com/watch?v=aDfSJx7Qc1k
https://www.youtube.com/watch?v=piP9jMJpvyI
https://www.youtube.com/watch?v=Bzaf-hkQIlI
https://www.youtube.com/watch?v=l-9fKO0OXBM
https://www.youtube.com/watch?v=OCfs4vvbqdo
https://www.youtube.com/watch?v=qlaWo7hORIg
https://www.youtube.com/watch?v=Mr_D3wxarQ4
https://www.youtube.com/watch?v=Hk-_58xzznE
https://www.youtube.com/watch?v=KJtXwyOLiSU
https://www.youtube.com/watch?v=3JVRewbvUk8
https://www.youtube.com/watch?v=WlloK0gFN58
https://www.youtube.com/watch?v=GiagkUqUWeo
https://www.youtube.com/watch?v=ee1E25zQJ94
https://www.youtube.com/watch?v=-hMsCHC9HOc
https://www.youtube.com/watch?v=CtA6FlnuE4M
https://www.youtube.com/watch?v=zr5W05hbjiU
https://www.youtube.com/watch?v=s8cAPOQbs0Q
https://www.youtube.com/watch?v=S85KaKiPGIE
https://www.youtube.com/watch?v=s2FDoTkgQOE
https://www.youtube.com/watch?v=lkkOP0KPmxY
https://www.youtube.com/watch?v=LdkBFBJervk
https://www.youtube.com/watch?v=AtCP25SWojQ
https://www.youtube.com/watch?v=jmBc5VXuz1c
https://www.youtube.com/watch?v=OvzrLYt1iH4
https://www.youtube.com/watch?v=JiNiOGQ4G1Y
https://www.youtube.com/watch?v=F-zmS1QBrUY
https://www.youtube.com/watch?v=leRcH-3eO3Y
https://www.youtube.com/watch?v=ZYgfvl2W8_s
https://www.youtube.com/watch?v=xjx5JSaSF8I
https://www.youtube.com/watch?v=g5Q4fAZoeJ8
https://www.youtube.com/watch?v=tYgSTMefAmM
https://www.youtube.com/watch?v=Bnapv8aWKfE
https://www.youtube.com/watch?v=TIOYcdjvvSk
https://www.youtube.com/watch?v=cYObcqSfo4A
https://www.youtube.com/watch?v=pr-kw__Xwv4
https://www.youtube.com/watch?v=SG7tOCwSV5w
https://www.youtube.com/watch?v=kzlDdapsqoQ
https://www.youtube.com/watch?v=21ojE3CMjh0
https://www.youtube.com/watch?v=lQTUfXZfLPY
https://www.youtube.com/watch?v=n7-KQiXbuaw
https://www.youtube.com/watch?v=vGRm2UwMuq8
https://www.youtube.com/watch?v=BFu027Fj2Mk
https://www.youtube.com/watch?v=o7zmGiqxR9M
https://www.youtube.com/watch?v=8IqinHf8sgs
https://www.youtube.com/watch?v=YG53sEcccX4
https://www.youtube.com/watch?v=w0QJlq3RdcM
https://www.youtube.com/watch?v=iHMtdhbdrw4
https://www.youtube.com/watch?v=AGF3USBYCA8
https://www.youtube.com/watch?v=---nPP57TGM
https://www.youtube.com/watch?v=RS4kBQJ8Zdw
https://www.youtube.com/watch?v=qrGvErDm2Sk
https://www.youtube.com/watch?v=2wXA2m-je3s
https://www.youtube.com/watch?v=3WgDqaG19xQ
https://www.youtube.com/watch?v=bW9T2HppvuY
https://www.youtube.com/watch?v=GwVh3UTwRmo
https://www.youtube.com/watch?v=PeYc0YFydFs
https://www.youtube.com/watch?v=twK3JYBRSzU
https://www.youtube.com/watch?v=zGgtASApBl0
https://www.youtube.com/watch?v=AjnQLQ-qHxg
https://www.youtube.com/watch?v=iMnxKP2kSAI
https://www.youtube.com/watch?v=OwSCVR3r4Ac
https://www.youtube.com/watch?v=kn0Hvh0LrHg
https://www.youtube.com/watch?v=DyQCd6pWAok
https://www.youtube.com/watch?v=JLs0B0TXigE
https://www.youtube.com/watch?v=ggn2M8a37n4
https://www.youtube.com/watch?v=zHKZLJIJSqc
https://www.youtube.com/watch?v=TWYfaZ-ceaw
https://www.youtube.com/watch?v=qtl1BaU_Jew
https://www.youtube.com/watch?v=HZ54_WPNRys
https://www.youtube.com/watch?v=ypImAOWnUPo
https://www.youtube.com/watch?v=YLq67NZBNoE
https://www.youtube.com/watch?v=4KdUFmErGdw
https://www.youtube.com/watch?v=GqaH6I0IC08
https://www.youtube.com/watch?v=Tto9XE80e2s
https://www.youtube.com/watch?v=8jDw3QqD7XI
https://www.youtube.com/watch?v=E4a4ZF6Y3bg
https://www.youtube.com/watch?v=7I-yxcMvDdU
https://www.youtube.com/watch?v=VYLNWQKtrUM
https://www.youtube.com/watch?v=Wm8rKHhDdyw
https://www.youtube.com/watch?v=7ygFMR2SP8Q
https://www.youtube.com/watch?v=IDtMvMqn9sk
https://www.youtube.com/watch?v=3YlAexxE3i4
https://www.youtube.com/watch?v=RVvOFVooucs
https://www.youtube.com/watch?v=GFF3_tH1PP4
https://www.youtube.com/watch?v=xkuKtaT-tNY
https://www.youtube.com/watch?v=2OqJ6V8casg
https://www.youtube.com/watch?v=xIJQTC1zGbY
https://www.youtube.com/watch?v=wbtJWkVfiDM
https://www.youtube.com/watch?v=6jtLag77qDQ
https://www.youtube.com/watch?v=dbMHdZyuTjg
https://www.youtube.com/watch?v=LnwPf20eegg
https://www.youtube.com/watch?v=SZC8YpBXkL8
https://www.youtube.com/watch?v=R7NaCNYDANc
https://www.youtube.com/watch?v=exjgf65jIPE
https://www.youtube.com/watch?v=MCgo7RlP7KE
https://www.youtube.com/watch?v=IGXL3RBJhhw
https://www.youtube.com/watch?v=5bQfaumR7KI
https://www.youtube.com/watch?v=H8MwC9yoRkw
https://www.youtube.com/watch?v=DkxOnlYfDIg
https://www.youtube.com/watch?v=gUcNQ6YU5HM
https://www.youtube.com/watch?v=InUcTmOvV54
https://www.youtube.com/watch?v=a-Fn7gAihgY
https://www.youtube.com/watch?v=nLP27PWqZEw
https://www.youtube.com/watch?v=TNGr0PxPpZw
https://www.youtube.com/watch?v=1IjIyk3I9R0
https://www.youtube.com/watch?v=i5D0vKSudNY
https://www.youtube.com/watch?v=BxMpZpiyKDQ
https://www.youtube.com/watch?v=4D3ci2YrCwc
https://www.youtube.com/watch?v=mQ996Pc9Y_M
https://www.youtube.com/watch?v=0FTH2icAEPg
https://www.youtube.com/watch?v=gzVueTlk8e4
https://www.youtube.com/watch?v=yUj4ZhOH3zc
https://www.youtube.com/watch?v=36DqFmgExPA
https://www.youtube.com/watch?v=188YOx5eT4I
https://www.youtube.com/watch?v=PQwsY6VmiI4
https://www.youtube.com/watch?v=f2ZPwS-BXME
https://www.youtube.com/watch?v=eOz2dszqc44
https://www.youtube.com/watch?v=plUEPeZ153c
https://www.youtube.com/watch?v=6Mrmx9My624
https://www.youtube.com/watch?v=JfsSk8m3t0w
https://www.youtube.com/watch?v=O0tivsp3WIc

*/

