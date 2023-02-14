const express= require("express")
const app=express()
require('dotenv').config()
app.use(express.urlencoded({ extended: true }));
const {Navigator}=require("node-navigator")
const navigator=new Navigator
const accountSid=process.env.PARAM1
authToken=process.env.PARAM2
const browserEnv = require('browser-env');
browserEnv(['navigator']);
const client=require('twilio')(accountSid ,authToken)
app.use(express.json());
var long
var latt
var lang='English'
function msg(text){
    console.log("waiting")
client.messages
.create({body:text, from: process.env.SENDER, to: process.env.RECIEVER})
.then(message => console.log(message.sid));}
navigator.geolocation.getCurrentPosition((data) => {
    console.log(data);
    long=data.latitude
    latt=data.longitude
  })
dic={
    Response1:`Hello There\n What kind of help do you need.\nEnter the option/s
        1) I am Lost.
        2) I am seriosly Injured.
        3) I am being followed.
        4) I am currently being Threatend.
        5) I am depressed/suicidal.
        6) Specify Otherwise
        9) Tell me a joke.
        To change the language Enter #1 for Hindi or #2* for English
        भाषा बदलने के लिए हिंदी के लिए *1* या अंग्रेजी के लिए *2* दर्ज करें
    `,
    Response2:`नमस्कार आपको किस प्रकार की सहायता की आवश्यकता है |
    विकल्प दर्ज करें |
    1) मैं गुम हो गया हूं।
    2) मुझे चोट लगी है।
    3) मेरा पीछा किया जा रहा है।
    4) मुझे खतरा महसूस हो रहा है।
    5) मैं उदास हूं।
    6) अन्यथा निर्दिष्ट करें
    To change the language Enter #1 for Hindi or #2* for English
    भाषा बदलने के लिए हिंदी के लिए *1* या अंग्रेजी के लिए *2* दर्ज करें
    `
    ,
    Lost:`Informming the Police department and  emergency contacts with your Current Location .
    Enter the location in Google map or any other map to navigate to Home .
    Here are some quick guidliness to follow.
    1) Stay Calm .
    2) Retrace your steps.
    3) Ask a hotel only if you feel Confident and secure enough.
    4) Look for a landmark.
    5) Be discreet in Public , avoid going to lonely places.

    Don't Panic .
    `
    ,
    LostH:`अपने वर्तमान स्थान के साथ पुलिस विभाग और आपातकालीन संपर्कों को सूचित करना।
    होम पर नेविगेट करने के लिए Google मानचित्र या किसी अन्य मानचित्र में स्थान दर्ज करें।
    यहां अनुसरण करने के लिए कुछ त्वरित दिशानिर्देश दिए गए हैं।
    1) शांत रहो।
    2) अपने कदम पीछे हटाओ।
    3) किसी होटल से तभी पूछें जब आप आत्मविश्वासी और पर्याप्त सुरक्षित महसूस करें।
    4) एक लैंडमार्क की तलाश करें।
    5) सार्वजनिक रूप से विवेकशील बनें, एकांत स्थानों पर जाने से बचें।

    घबड़ाएं नहीं ।`
    ,
    Injured:`
    Calling emergency medical services and sharing information with emergency contacts.
    Keep GPS/location turned on for live location sharing .
    Till then 
    1) If bleeding then try to cover the injury with a cloth to prevent blood loss .
    2) Don't move and take rest at nearest possilble location .
    3) If possible ask in public for Help.
    4) Don't panic as it won't help .
    5) Try to arrange a first-aid kit as sson as possible .
    Medical services are on the way , hold on then. 
    `,
    InjuredH:`आपातकालीन चिकित्सा सेवाओं को कॉल किया और आपातकालीन संपर्कों के साथ जानकारी साझा की।
    लाइव स्थान साझा करने के लिए GPS/स्थान चालू रखें।
    तक है
    1) अगर खून बह रहा हो तो चोट को कपड़े से ढकने की कोशिश करें ताकि खून की कमी न हो।
    2) हिलें नहीं और निकटतम संभावित स्थान पर आराम करें।
    3) यदि संभव हो तो सार्वजनिक रूप से मदद मांगें।
    4) घबराएं नहीं क्योंकि इससे कोई फायदा नहीं होगा।
    5) यथासंभव प्राथमिक चिकित्सा किट की व्यवस्था करने का प्रयास करें।
    चिकित्सा सेवाएं रास्ते में हैं, तब तक रुकें।`,
    Followed:`Calling Police department for immediate help and sharing live location to emergency Contact
    Keep GPS/location turned on for live location sharing .
    Be Confident follow these quick guidliness till authority approches:=
    1) Go to any crowded place and mix up with other people .
    2) Avoid making any kind of contact with the suspect.
    3) Don't stop unneccasrry places.
    4) Find someone trustable and know around.
    5) Must avoid going to lonely places.
    6) Try to show that you are not alone.
    `,
    FollowedH:`तत्काल मदद के लिए पुलिस विभाग को फोन किया और इमरजेंसी कॉन्टैक्ट को लाइव लोकेशन शेयर की
    लाइव स्थान साझा करने के लिए GPS/स्थान चालू रखें।
    जब तक प्राधिकरण पास नहीं आता तब तक आत्मविश्वास से इन त्वरित दिशानिर्देशों का पालन करें: =
    1) किसी भी भीड़भाड़ वाली जगह पर जाएं और अन्य लोगों के साथ मिलें।
    2) संदिग्ध व्यक्ति से किसी भी तरह का संपर्क बनाने से बचें।
    3) अनावश्यक जगहों पर न रुकें।
    4) किसी भरोसेमंद को खोजें और आसपास जानें।
    5) सुनसान जगह पर जाने से बचना चाहिए।
    6) यह दिखाने की कोशिश करें कि आप अकेले नहीं हैं।`,
    Threat:` Assuming Threat is immediate calling Police for help . 
    Emergency contacts have also been informed of situation with you live location.
    Keep GPS/location turned on for live location sharing .
    Be Confident and with a calm mind follow these quick guidliness;-
    1) Move away from suspect and find the nearest poloce station or public place .
    2) Avoid Direct contact with suspect as long as possible .
    3) Prepare a defensive weopen or shield in case of contact with suspect .
    
    `,
    ThreatH:`धमकी मानकर तुरंत मदद के लिए पुलिस को बुलाया जाता है।
    आपके लाइव स्थान के साथ आपातकालीन संपर्कों को भी स्थिति के बारे में सूचित किया गया है।
    लाइव स्थान साझा करने के लिए GPS/स्थान चालू रखें।
    आत्मविश्वासी बनें और शांत मन से इन त्वरित दिशा-निर्देशों का पालन करें;-
    1) संदिग्ध से दूर हटो और निकटतम पुलिस स्टेशन या सार्वजनिक स्थान का पता लगाओ।
    2) जहां तक ​​संभव हो संदिग्ध के साथ सीधे संपर्क से बचें।
    3) संदिग्ध के संपर्क के मामले में एक रक्षात्मक वीओपन या ढाल तैयार करें।
    `,
    depress:`Depression can be very dangerous and can lead to extreme unintended steps. Informing emergency contactes of situation 
    Try following tips;=
    1) If you’re up for exercise, consider a walk around the block .
    2) Know that today isn’t indicative of tomorrow.
    3) Do the opposite of what the ‘depression voice’ suggests.
    4) You may find it helpful to create a routine.
    5) Spend time in nature.
    `,
    depressH:`अवसाद बहुत खतरनाक हो सकता है और अत्यधिक अनपेक्षित कदम उठा सकता है। स्थिति के आपातकालीन संपर्कों को सूचित करना
    निम्नलिखित युक्तियों का प्रयास करें; =
    1) यदि आप व्यायाम के लिए तैयार हैं, तो ब्लॉक के चारों ओर टहलने पर विचार करें।
    2) जान लें कि आज कल का संकेत नहीं है।
    3) 'डिप्रेशन वॉइस' जो सुझाव देती है, उसके विपरीत करें।
    4) आपको दिनचर्या बनाने में मदद मिल सकती है।
    5) प्रकृति में समय बिताएं।`

}


app.post("/",async (req,res)=>{
    var query=req.body.help
    if(req.body.help=="#1"){
        lang="Hindi"
        return res.send(dic.Response2)
    }
    if(req.body.help=="#2"){
        lang="English"
        return res.send(dic.Response1)
    }
    if(query=="1"){
        msg(`${req.body.name} is Lost.His last recorder location was ${long} longitude and ${latt} lattitude . Police authorities have been informed.
        `)
        if(lang=="Hindi"){
            res.send(dic.LostH)
            return
        }
        else{
            res.send(dic.Lost)
            return
        }
    }
    if(query=="2"){
        msg(`${req.body.name} is injured.His last recorder location was ${long} longitude and ${latt} lattitude . Medical services have been informed.
        ${req.body.name} घायल है। उसका पिछला रिकॉर्डर स्थान ${long} देशांतर और ${latt} अक्षांश था। चिकित्सा सेवाओं को अवगत करा दिया गया है।
        `)
        if(lang=="Hindi"){
            res.send(dic.InjuredH)
            return
        }
        else{
            res.send(dic.Injured)
            return
        }
    }
    if(query=="3"){
        msg(`${req.body.name} is feeling threatend and not feeling safe. You are His/Her emergency contact.His/Her last recorder location was ${long} longitude and ${latt} lattitude .Police authoroties have been contacted.
        ${req.body.name} को खतरा महसूस हो रहा है और वह सुरक्षित महसूस नहीं कर रहा है। आप उसके आपातकालीन संपर्क हैं। उसका पिछला रिकॉर्डर स्थान ${long} देशांतर और ${latt} अक्षांश था। पुलिस अधिकारियों से संपर्क किया गया है|
        `)
        if(lang=="Hindi"){
            res.send(dic.FollowedH)
            return
        }
        else{
            res.send(dic.Followed)
            return
        }
    }
    if(query=="4"){
        msg(`${req.body.name} is feeling threatend and not feeling safe. You are His/Her emergency contact.His/Her last recorder location was ${long} longitude and ${latt} lattitude .Police authoroties have been contacted.
        ${req.body.name} को खतरा महसूस हो रहा है और वह सुरक्षित महसूस नहीं कर रहा है। आप उसके आपातकालीन संपर्क हैं। उसका पिछला रिकॉर्डर स्थान ${long} देशांतर और ${latt} अक्षांश था। पुलिस अधिकारियों से संपर्क किया गया है|
        `)
        if(lang=="Hindi"){
            res.send(dic.ThreatH)
            return
        }
        else{
            res.send(dic.ThreatH)
            return
        }
    }
    if(query=="5"){
        msg(`${req.body.name} is suffering from serios dipression . Depression can lead to extreme unintended steps .His/Her last recorder location was ${long} longitude and ${latt} lattitude . Try Contacting ${req.body.name} as soon as possible.
        ${req.body.name} गंभीर अवसाद से पीड़ित है। डिप्रेशन अत्यधिक अनपेक्षित कदमों की ओर ले जा सकता है। उसका/उसका पिछला रिकॉर्डर स्थान ${long} देशांतर और ${latt} अक्षांश था। ${req.body.name} से जल्द से जल्द संपर्क करने की कोशिश करें।
        `)
        if(lang=="Hindi"){
            res.send(dic.depressh)
            return
        }
        else{
            res.send(dic.depress)
            return
        }

    }
    query=query.toUpperCase()
    
    if (query.includes("LOST") || query.includes("HOME") || query.includes("ROAD") || query.includes("WAY") || query.includes("DON'T") || query.includes("FORGOT") || query.includes("PLACE")){
        msg(`${req.body.name} is Lost.His last recorder location was ${long} longitude and ${latt} lattitude . Police authorities have been informed.
        `)
        if(lang=="Hindi"){
            res.send(dic.LostH)
            return
        }
        else{
            res.send(dic.Lost)
            return
        }
    }
    if(query.includes("FOLLOWED") || query.includes("STRANGER")){
        msg(`${req.body.name} is feeling threatend and not feeling safe. You are His/Her emergency contact.His/Her last recorder location was ${latt} longitude and ${long} lattitude .Police authoroties have been contacted.
        ${req.body.name} को खतरा महसूस हो रहा है और वह सुरक्षित महसूस नहीं कर रहा है। आप उसके आपातकालीन संपर्क हैं। उसका पिछला रिकॉर्डर स्थान ${long} देशांतर और ${latt} अक्षांश था। पुलिस अधिकारियों से संपर्क किया गया है|
        `)
        if(lang=="Hindi"){
            res.send(dic.FollowedH)
            return
        }
        else{
            res.send(dic.Followed)
            return
        }
    }
    if(query.includes("WOUNDED") || query.includes("INJUR") || query.includes("ACCIDENT") || query.includes("FALL") || query.includes("AMBULANCE") || query.includes("HEART") || query.includes("HEALTH")){
        msg(`${req.body.name} is injured.His last recorder location was ${long} longitude and ${latt} lattitude . Medical services have been informed.
        ${req.body.name} घायल है। उसका पिछला रिकॉर्डर स्थान ${long} देशांतर और ${latt} अक्षांश था। चिकित्सा सेवाओं को अवगत करा दिया गया है।
        `)
        if(lang=="Hindi"){
            res.send(dic.InjuredH)
            return
        }
        else{
            res.send(dic.Injured)
            return
        }
    }
    if(query.includes("THREAT") || query.includes("ATTACKER") || query.includes("DANGER") || query.includes("LIFE") || query.includes("POLICE") || query.includes("WEAPON")){
        msg(`${req.body.name} is feeling threatend and not feeling safe. You are His/Her emergency contact.His/Her last recorder location was ${long} longitude and ${latt} lattitude .Police authoroties have been contacted.
        ${req.body.name} को खतरा महसूस हो रहा है और वह सुरक्षित महसूस नहीं कर रहा है। आप उसके आपातकालीन संपर्क हैं। उसका पिछला रिकॉर्डर स्थान ${long} देशांतर और ${latt} अक्षांश था। पुलिस अधिकारियों से संपर्क किया गया है|
        `)
        if(lang=="Hindi"){
            res.send(dic.ThreatH)
            return
        }
        else{
            res.send(dic.ThreatH)
            return
        }
    }
    if(query.includes("DEPRESS") || query.includes("SUCID") || query.includes("ROPE") || query.includes("ENGI")){
        msg(`${req.body.name} is suffering from serios dipression . Depression can lead to extreme unintended steps .His/Her last recorder location was ${long} longitude and ${latt} lattitude . Try Contacting ${req.body.name} as soon as possible.
        ${req.body.name} गंभीर अवसाद से पीड़ित है। डिप्रेशन अत्यधिक अनपेक्षित कदमों की ओर ले जा सकता है। उसका/उसका पिछला रिकॉर्डर स्थान ${long} देशांतर और ${latt} अक्षांश था। ${req.body.name} से जल्द से जल्द संपर्क करने की कोशिश करें।
        `)
        if(lang=="Hindi"){
            res.send(dic.depressh)
            return
        }
        else{
            res.send(dic.depress)
            return
        }
    }
        if(lang=="Hindi"){
            return res.send(dic.Response2)
        }
        else{
            return res.send(dic.Response1)
        }
    }
)
app.listen(80,()=>{
    console.log("Server Running")
})