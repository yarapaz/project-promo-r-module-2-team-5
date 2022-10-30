"use strict";const titleHeader=document.querySelectorAll(".js_fieldset_boxOne"),arrow=document.querySelectorAll(".js_arrow"),content=document.querySelectorAll(".js_boxTwo");for(let e=0;e<titleHeader.length;e++)titleHeader[e].addEventListener("click",()=>{for(let t=0;t<content.length;t++)e===t?(content[t].classList.contains("collapsed")&&content[t].classList.remove("collapsed"),content[t].classList.contains("collapsed")&&content[t].classList.add("collapsed"),arrow[t].classList.contains("upsideDown")&&arrow[t].classList.remove("upsideDown"),arrow[t].classList.contains("upsideDown")&&arrow[t].classList.add("upsideDown")):(content[t].classList.add("collapsed"),arrow[t].classList.add("upsideDown"))});const previewName=document.querySelector(".js_preview_name"),previewBorder=document.querySelector(".js_preview_box1"),previewIcons=document.querySelectorAll(".js_card_icon"),previewIconsBorder=document.querySelectorAll(".js_media_item"),inputPalette1=document.querySelector(".js_input_palette1"),inputPalette2=document.querySelector(".js_input_palette2"),inputPalette3=document.querySelector(".js_input_palette3");function handleInputPalette1(){previewName.classList.remove("palette2-color1"),previewName.classList.remove("palette3-color1"),previewName.classList.add("palette1-color1"),previewBorder.classList.remove("palette2-color2"),previewBorder.classList.remove("palette3-color2"),previewBorder.classList.add("palette1-color2");for(const e of previewIcons)e.classList.remove("palette2-color1"),e.classList.remove("palette3-color1"),e.classList.add("palette1-color1");for(const e of previewIconsBorder)e.classList.remove("palette2-color3"),e.classList.remove("palette3-color3"),e.classList.add("palette1-color3")}function handleInputPalette2(){previewName.classList.remove("palette1-color1"),previewName.classList.remove("palette3-color1"),previewName.classList.add("palette2-color1"),previewBorder.classList.remove("palette1-color2"),previewBorder.classList.remove("palette3-color2"),previewBorder.classList.add("palette2-color2");for(const e of previewIcons)e.classList.remove("palette1-color1"),e.classList.remove("palette3-color1"),e.classList.add("palette2-color1");for(const e of previewIconsBorder)e.classList.remove("palette1-color3"),e.classList.remove("palette3-color3"),e.classList.add("palette2-color3")}function handleInputPalette3(){previewName.classList.remove("palette1-color1"),previewName.classList.remove("palette2-color1"),previewName.classList.add("palette3-color1"),previewBorder.classList.remove("palette1-color2"),previewBorder.classList.remove("palette2-color2"),previewBorder.classList.add("palette3-color2");for(const e of previewIcons)e.classList.remove("palette1-color1"),e.classList.remove("palette2-color1"),e.classList.add("palette3-color1");for(const e of previewIconsBorder)e.classList.remove("palette1-color3"),e.classList.remove("palette2-color3"),e.classList.add("palette3-color3")}inputPalette1.addEventListener("change",handleInputPalette1),inputPalette2.addEventListener("change",handleInputPalette2),inputPalette3.addEventListener("change",handleInputPalette3);const inputsInfo=document.querySelectorAll(".js_input"),previewJob=document.querySelector(".js_preview_job"),previewImg=document.querySelector(".js_preview_img"),cardResetBtn=document.querySelector(".js_card_reset_btn");function emptyFields(){const e=document.querySelectorAll(".js_resetable");for(let t=0;t<e.length;t++)e[t].value=""}function emptyImg(){document.querySelector(".js_cardPic").src="./assets/images/astronaut.jpg"}function resetRadios(){document.querySelector(".js_default_radio").checked=!0}function handleResetBtn(e){e.preventDefault,emptyFields(),emptyImg(),handleInputPalette1(),resetRadios()}cardResetBtn.addEventListener("click",handleResetBtn);