import{d as e,o as s,a as i,g as t}from"./vendor.6b71a6e3.js";const a={key:0,class:"p-imei"},o=t("h3",{class:"title"}," You have a Lite version of membership service to be bound ",-1),l={class:"form"},c=t("p",{class:"label"},"IMEI",-1),n=t("p",{class:"control"},[t("input",{class:"ptc-input",placeholder:"please enter"})],-1),p={class:"tip"},r=t("button",{class:"ptc-button"},"BIND IMEI",-1),u={key:1,class:"p-imei"},d=[t("h3",{class:"title"},"View mobile IMEI",-1),t("div",{class:"guide"},[t("div",{class:"guide-txt"}," View on iPhone: Turn on the phone and click Settings-General-About this machine to check the IMEI number。 "),t("div",{class:"guide-img"})],-1)],h=e({props:{action:null},setup:e=>(h,v)=>"bind"===e.action?(s(),i("div",a,[o,t("div",l,[c,n,t("p",p,[t("span",{onClick:v[0]||(v[0]=e=>h.$router.push("view"))},"How to view IMEI？")])]),r])):(s(),i("div",u,d))});export{h as default};
