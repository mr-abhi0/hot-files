function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var adcValid;"object"!==_typeof(adcValid)&&(adcValid={}),adcValid.errorMes={settings:{button:[],message:"js_errorMessage"},remove:function(){$("."+this.settings.message+", ."+this.settings.message+"2").remove()},mes:function(e,r){var i,t,s,o=this,a="function"==typeof e.attr?e:$(e);if(!a.length)return console.error("Not an item to display an error",a),!1;s=o.body===o.add?(o.add.add("html"),t=a.offset().left,a.offset().top):(t=a.offset().left-o.add.offset().left,a.offset().top-o.add.offset().top+o.add.scrollTop()),o.add.animate({scrollTop:s-50},0,function(){i="left: "+t+"px;top: "+(s-36)+"px;background-color: #e74c3c;border-radius: 5px;border: 1px dashed black;color: #fff;font-family: Arial, 'Nimbus Sans L', Helvetica, sans-serif;font-size: 14px;margin: 3px 0 0 0px;padding: 6px 5px 5px;position: absolute;display: block;z-index: 9999",o.remove(),o.add.append('<div class="'+o.settings.message+'2" style="'+i+'">'+r+"</div>"),a.focus()})},resize:function(){var e=this;e.window.resize(function(){e.remove()})},init:function(){var t=this;t.window=$(window),t.body=$("body"),t.add=t.body,t.click=$("input, textarea").add(t.body),t.click.on("touchend click",function(e){for(var r=!0,i=0;i<t.settings.button.length;i++)($(e.target).closest("."+t.settings.button[i]).length||e.target.classList.contains(t.settings.button[i]))&&(r=!1);r&&t.remove()}),t.resize()}},adcValid.validation={settings:{postal_code:/^[\d]{2,6}$/i,rename:/^[^\\|\/.!@#$%^&*()=+`~'":;?,<>{}[\]\d«»„\t\n\v\f\r]+$/i,rename2:/^[^\\|\/.!@#$%^&*()=+~'":;?,<>{}[\]\d«»„\t\n\v\f\r\s]+\s[^\\|\/.!@#$%^&*()=+~'":;?,<>{}[\]\d«»„\t\n\v\f\r\s]+$/i,rephone:/^[\d\-+() ]*$/i,email:/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i},cleaning:function(e){return e.replace(/^\s+|\s+$/g,"").replace(/\s+/g," ")},partition:function(e,r,i,t){var s=!1,o="function"==typeof e.attr?e:$(e),e=this.cleaning(o.val());if(mes=r||defaults.get_locale_var("set_address"),e)o.val(e);else if("object"===_typeof(i)?void 0!==i[t]&&(s=i[t]):s=i,s)return o.val(""),adcValid.errorMes.mes(o,mes),!1;return!0},init:function(e,r){var i,t=this,s={not:["Field is required"],notName:["Name is a required field","set_fio"],erName:["Name field is entered incorrectly","error_fio"],notPhone:["Phone number is a required field","set_phone"],erPhone:["The phone number is entered incorrectly","error_phone"],erEmail:["The email is entered incorrectly","error_email"],notAddress:["Address is a required field","set_address"],erAddress:["Invalid address, please, refill the form","error_address"],notHouse:["House is a required field","set_house"],notCity:["City is a required field","set_city"]};for(i in s)"object"===_typeof(defaults)&&s[i][1]&&(s[i][0]=defaults.get_locale_var(s[i][1]));if(t.button="function"==typeof e.attr?e:$(e),t.form=t.button.closest("form"),t.allForm||(t.allForm=$("form")),t.input={name:t.form.find('[name="name"]'),phone:t.form.find('[name="phone"]'),address:t.form.find('[name="address"]'),email:t.form.find('[name="email"]')},"2+"===t.input.name.attr("data-count-length")&&(t.settings.rename=t.settings.rename2),t.cleaning(t.input.name.val())){if(t.settings.rename.test(t.cleaning(t.input.name.val()))){if(t.input.phone.val()&&t.input.phone.val().length){if(!t.settings.rephone.test(t.input.phone.val())||t.input.phone.val().length<6)return adcValid.errorMes.mes(t.input.phone,s.erPhone[0]),!1;if(t.input.address.length&&""===t.cleaning(t.input.address.val())&&t.input.address.is(":visible"))return adcValid.errorMes.mes(t.input.address,s.erAddress[0]),!1;if(t.input.email.length&&t.input.email.is(":visible")&&!t.settings.email.test(t.input.email.val()))return adcValid.errorMes.mes(t.input.email,s.erEmail[0]),!1;if("object"===_typeof(r)&&!r.length){for(var o in t.fullAddress=[],r){var a=t.form.find('[name="'+o+'"]'),n="street"===o?"notAddress":"house"===o?"notHouse":"city"===o?"notCity":"not";if(a.length){if(r[o]&&(!t.cleaning(a.val())||t.settings[o]&&!t.settings[o].test(t.cleaning(a.val()))))return adcValid.errorMes.mes(a,s[n][0]),!1}else if(a=t.form.find("#"+o+'[type="checkbox"]'),a.length&&!a.prop("checked"))return adcValid.errorMes.mes(a,s[n][0]),!1;"checkbox"!==a.attr("type")&&t.fullAddress.push(t.cleaning(a.val()))}t.allForm.find('[name="address"]').val(t.fullAddress.join(" "))}return adcValid.errorMes.remove(),!0}return adcValid.errorMes.mes(t.input.phone,s.notPhone[0]),!1}return adcValid.errorMes.mes(t.input.name,s.erName[0]),!1}return adcValid.errorMes.mes(t.input.name,s.notName[0]),!1}},$().ready(function(){adcValid.errorMes.init(),$('[name="phone"]').attr("type","tel").addClass("only_number"),$(".to_top").click(function(e){return e.preventDefault(),$("html,body").animate({scrollTop:0},400),!1});var e,r,i=$("input[name=ip_country]").val();i&&(e=!1,$("select").each(function(){"country_code_selector"===this.id&&($(this).change(function(){$("input[name=country_code]").val(this.value)}),$("#"+this.id+" option").each(function(){this.value===i&&(e=!0,this.parentElement.value=i)}))}),e?$('input[name="country_code"]').each(function(){this.value=i}):(r=$("input[name=ip_country_name]").val())&&$("select").each(function(){"country_code_selector"===$(this).attr("id")&&$(this).append($("<option>",{value:i}).text(r).attr("selected","selected")[0])}));var t=$("#country_code_selector").val();function s(e,r){$(".js_errorMessage").remove(),jQuery('<div class="js_errorMessage">'+r+"</div>").appendTo("body").css({left:jQuery(e).offset().left,top:jQuery(e).offset().top-30,"background-color":"#e74c3c",border:"1px dashed black","border-radius":"5px",color:"#fff","font-family":"Arial","font-size":"14px",margin:"3px 0 0 0px",padding:"6px 5px 5px",position:"absolute","z-index":"9999"}),jQuery(e).focus()}t&&$("input[name=country_code]").val(t),$(".only_number").on("keydown",function(e){/^(?:46|8|9|27|187)$/.test(e.keyCode)||65==e.keyCode&&!0===e.ctrlKey||35<=e.keyCode&&e.keyCode<=39||(e.keyCode<48||57<e.keyCode)&&(e.keyCode<96||105<e.keyCode)&&e.preventDefault()}),$(".js_submit").click(function(e){var a,n;return e.preventDefault(),a=this,(n={submit:function(r,i){var t={country:r.find('[name="country_code"]'),fio:r.find('[name="name"]'),phone:r.find('[name="phone"]'),lid:r.find('[name="lid"]'),address:r.find('[name="address"]'),house:r.find('[name="house"]'),city:r.find('[name="city"]'),email:r.find('[name="email"]'),validate_address:r.find('[name="validate_address"]')},s={method:"feedback",name:t.fio.val(),phone:t.phone.val(),country:t.country.val(),lid:t.lid.val(),email:t.email.val(),house:t.house.val(),address:t.address.val(),city:t.city.val(),validate_address:t.validate_address.val()};jQuery(".js_errorMessage").remove();s.country.toLowerCase();var e=/^[\D+ ]*$/i;if("2+"==t.fio.attr("data-count-length")&&(e=/^\D+\s[\D+\s*]+$/i),!s.name.length)return n.errorMessage(t.fio,defaults.get_locale_var("set_fio"));if(!s.name.length||!e.test(s.name))return n.errorMessage(t.fio,defaults.get_locale_var("error_fio"));if(!s.phone||!s.phone.length)return n.errorMessage(t.phone,defaults.get_locale_var("set_phone"));if(!/^[0-9\-\+\(\) ]*$/i.test(s.phone)||s.phone.length<6)return n.errorMessage(t.phone,defaults.get_locale_var("error_phone"));if(s.email&&s.email.length&&!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i.test(s.email))return n.errorMessage(t.email,defaults.get_locale_var("error_email"));if(t.address.length&&"none"!==$(t.address).css("display")&&""===s.address)return n.errorMessage(t.address,defaults.get_locale_var("set_address"));if(t.city.length&&"none"!==$(t.city).css("display")&&"hidden"!==t.city.attr("type")&&""===s.city)return n.errorMessage(t.city,defaults.get_locale_var("set_city"));if(t.house.length&&"none"!==$(t.house).css("display")&&""===s.house)return n.errorMessage(t.house,defaults.get_locale_var("set_house"));if(t.validate_address&&"1"===s.validate_address&&t.address.length&&"none"!==$(t.address).css("display")){var o={};return $.each(r.serializeArray(),function(){void 0!==o[this.name]?(o[this.name].push||(o[this.name]=[o[this.name]]),o[this.name].push(this.value||"")):o[this.name]=this.value||""}),$.post("/order/validate_address/",o).done(function(e){for(key in e)e.hasOwnProperty(key)&&r.append('<input type="hidden" name="'+key+'" value="'+e[key]+'">');i?i(this):r.submit()}).fail(function(){$(t.city).css("display","inline-block"),$(t.house).css("display","inline-block");var e=defaults.get_locale_var("error_address");if(void 0!==s.address)return n.errorMessage(t.address,e);showAnotherFormHint(e)}),!1}if(i)i(r);else if($(a).hasClass("js_custom_validate")&&"function"==typeof adc_custom_validate){if(!adc_custom_validate(r))return!1;r.submit()}else r.submit();return!1},errorMessage:s}).submit($(a).parents("form").first()),!1}),$(".js_scroll_to_form").click(function(e){return e.preventDefault(),$("html,body").animate({scrollTop:$("form").offset().top},400),!1}),$(".change-package-button").on("touchend, click",function(){var e=$(this).data("package-id");$('.change-package-selector [value="'+e+'"]').prop("selected",!0),set_package_prices(e)}),$(".change-package-selector").on("change",function(){set_package_prices($(this).val())}),["model","browser","brand","appname"].forEach(function(e){window[e]=function(e){for(var r=window.location.search.substring(1).split("&"),i=0;i<r.length;i++){var t=r[i].split("=");if(t[0]==e)return decodeURIComponent(t[1])||""}return!1}(e)||""}),$("input[name=name]").on("touchend, click",function(){if(""!=name_hint)return s(this,name_hint),!1}),$("input[name=phone]").on("touchend, click",function(){if(""!=phone_hint)return s(this,phone_hint),!1}),$("body").on("touchend, click",function(){$(".js_errorMessage").remove()}),checkTimeZone(),setBrowser(),"undefined"!=typeof site_title&&$("title").text(site_title),window.lang_locale&&window.lang_locale.toLowerCase()in defaults.locale?defaults._locale=window.lang_locale.toLowerCase():defaults._locale="en"});var defaults={get_locale_var:function(e){var r=this._locale.toLowerCase();return(void 0!==this.locale[r][e]?this.locale[r]:this.locale[this._locale])[e]},locale:{ru:{set_country:"Вы не выбрали страну",set_fio:"Вы не заполнили ФИО",set_phone:"Вы не заполнили Телефон",set_comment:"Расскажите о вашей проблеме",set_holder_name:"Заполните имя номинанта",set_house:"House is a required field",set_nomin:"Заполните номинацию",set_address:"Заполните адрес",set_city:"Заполните город",error_email:"Неверно заполнен электронный адрес",error_fio:"Неверно заполнено ФИО",error_address:"Неверный адрес, пожалуйста, заполните форму заново",error_phone:"Неверно заполнен Телефон",exit_text:"Вы точно хотите закрыть вкладку? До завершения заказа осталось нажать одну кнопку!"},hi:{set_country:"आपने देश का चयन नहीं किया",set_fio:"आपनें पूरा नाम नहीं भरा",error_fio:"गलत नाम",set_phone:"आपनें फोन नंबर नहीं भरा",error_address:"Invalid address, please, refill the form",set_house:"House is a required field",set_address:"Address is a required field",set_city:"City is a required field",error_phone:"गलत फोन नंबर",exit_text:"क्या आप सुनिश्चित रूप से छोड़ना चाहते हैं? आप अपने आर्डर से बस एक चरण की दूरी पर हैं"},id:{set_country:"Anda belum memilih negara",set_fio:"Anda belum mengisi nama lengkap",error_fio:"Nama tidak valid",error_address:"Invalid address, please, refill the form",set_house:"House is a required field",set_address:"Address is a required field",set_city:"City is a required field",set_phone:"Anda belum mengisi nomor telepon",error_phone:"Nomor telepon tidak valid",exit_text:"Apakah Anda yakin Anda ingin meninggalkan laman ini? Hanya tinggal satu langkah lagi untuk menyelesaikan pesanan Anda!"},ms:{set_country:"Anda tidak memilih negara",set_house:"House is a required field",set_fio:"Anda tidak mengisi nama penuh",error_fio:"Nama tidak sah",set_phone:"Anda tidak mengisi nombor telefon",error_address:"Invalid address, please, refill the form",set_address:"Address is a required field",set_city:"City is a required field",error_phone:"Nombor telefon tidak sah",exit_text:"Adakah anda pasti anda ingin keluar? Hanya tinggal satu langkah lagi daripada pesanan anda!"},bg:{set_country:"Вие не сте избрали държава",set_house:"House is a required field",set_address:"Address is a required field",set_city:"City is a required field",set_fio:"Моля, въведете валидно име",error_fio:"Моля, въведете валидно име",set_phone:"Моля, въведете телефон за връзка",error_address:"Invalid address, please, refill the form",error_phone:"Телефонния номер е въведен неправилно",exit_text:"Сигурни ли сте че искате да затворите раздел? До приключване на поръчката кликнете с левия бутон един бутон!"},ro:{set_country:'Vă rugăm să completați câmpul "Nume/Prenume"',set_fio:'Cimpul a fost completat incorect "Nume/Prenume"',set_house:"House is a required field",error_fio:'Cimpul a fost completat incorect  "Nume/Prenume"',set_phone:'Vă rugăm să completați câmpul "Telefon"',set_address:"Address is a required field",error_address:"Invalid address, please, refill the form",set_city:"City is a required field",error_phone:'Cimpul a fost completat incorect "Telefon"',exit_text:"Sunteți sigur că doriți să închideți o filă? Până la finalizarea comenzii stânga faceți clic pe un buton!"},br:{set_country:"Não selecionou país",set_fio:"Por gentileza, verifique os seus dados",set_house:"House is a required field",error_fio:"Por gentileza, verifique os seus dados",error_address:"Invalid address, please, refill the form",set_address:"Address is a required field",set_city:"City is a required field",set_phone:"or gentileza, verifique os seus dados",error_phone:"or gentileza, verifique os seus dados",exit_text:"Tem certeza de que quer fechar uma guia? Até a conclusão da ordem esquerda clique em um botão!"},hu:{set_country:"Nem választott ország",set_house:"House is a required field",set_fio:"Nem kitölteni Név és vezetéknév",error_fio:"Helytelenül kitöltött Név és vezetéknév",set_phone:"Nem kitölteni Phone",error_address:"Invalid address, please, refill the form",set_address:"Address is a required field",set_city:"City is a required field",error_phone:"Helytelenül kitöltött Telefon",exit_text:"Biztos benne, hogy be akarja zárni a lapra? Befejezéséig a rendelés bal gombbal egy gombot!"},tr:{set_country:"Siz ülkeyi seçmediniz",set_house:"House is a required field",set_fio:"Adınızı yazınız lütfen",error_fio:"Adınız yalnış yazılmış",error_address:"Geçersiz adres, litfen tekrar giriniz",set_address:"Address is a required field",set_city:"City is a required field",set_phone:"Telefon numaranızı yazınız lütfen",error_phone:"Telefon numarası yanlış yazılmış",exit_text:"Sayfamızı kapatmak istediniz. Eminmisiniz? Sipariş etmek icin son tıklama lazım!"},pl:{set_country:"Podaj kraju",set_house:"House is a required field",set_fio:"Podaj imię i nazwisko",set_address:"Address is a required field",set_city:"City is a required field",error_address:"Invalid address, please, refill the form",error_fio:"Podaj realne imię i nazwisko",set_phone:"Podaj numer telefonu",error_phone:"Podaj realny numer telefonu",exit_text:"Czy na pewno chcesz zamknąć kartę?"},es:{set_country:"No escogió un país",set_house:"House is a required field",set_address:"Address is a required field",set_city:"City is a required field",set_fio:"No escribió su nombre y apellido",error_address:"Invalid address, please, refill the form",error_fio:"Usted escribió mal su nombre y apellido",set_phone:"No escribió su teléfono",error_phone:"Escribio mal su teléfono",exit_text:"¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!"},cl:{set_country:"No escogió un país",set_house:"House is a required field",set_fio:"No escribió su nombre y apellido",error_fio:"Usted escribió mal su nombre y apellido",error_address:"Invalid address, please, refill the form",set_phone:"No escbribió su teléfono",set_address:"Address is a required field",set_city:"City is a required field",error_phone:"Escribio mal su teléfono",exit_text:"¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!"},en:{set_country:"Select country",set_house:"House is a required field",set_fio:"Name is a required field",error_fio:"Name field is entered incorrectly",set_phone:"Phone number is a required field",set_address:"Address is a required field",error_address:"Invalid address, please, refill the form",set_city:"City is a required field",error_email:"The email is entered incorrectly",error_phone:"The phone number is entered incorrectly",exit_text:"You really want to close tab?"},ja:{set_country:"国を選択していません",set_house:"家の情報をご入力ください",set_fio:"苗字と名前を入力していません",error_fio:"無効の苗字と名前です",set_phone:"電話番号を入力していません",set_address:"住所を入力してください",error_address:"無効の住所です。再度ご入力ください",set_city:"都市名を入力してください",error_email:"無効のメールアドレスです",error_phone:"無効の電話番号です",exit_text:"本当にタブを閉じますか？左のボタンを押せば注文が完了します！"},nl:{set_country:"Je hebt het land nietgekozen",set_house:"Huisnummer is eenverplicht veld",set_fio:"Je hebtnaamenachternaamnietingevuld",error_fio:"Naamenachternaamzijnniet correct ingevuld",set_phone:"Je hebtTelefoonnummernietingevuld",set_comment:"Vertel over je probleem",set_address:"Vul het adres is",error_address:"Ongeldigadres, vulalsjeblieft het formulieropnieuw in",set_city:"Vul de woonplaats in",error_email:"Het e-mailadres in niet correct ingevuld",error_phone:"Telefoonnummer is niet correct ingevuld",exit_text:"Weet je zekerdat je het tabblad wilt sluiten? Nog maar één knop teklikken om je bestellingafteronden!"},pt:{set_country:"Não selecionou o país",set_house:"House is a required field",set_fio:"Não preencheu o nome completo",error_fio:"Nome inválido",set_address:"Address is a required field",error_address:"Invalid address, please, refill the form",set_city:"City is a required field",set_phone:"Não preencheu o telefone",error_phone:"Número de telefone inválido",exit_text:"Tem a certeza de que quer sair? Está apenas a um passo da sua encomenda!"},zh:{set_country:"你沒有選擇國家",set_house:"House is a required field",set_fio:"你沒有填寫完整姓名",error_fio:"無效姓名",set_address:"Address is a required field",error_address:"Invalid address, please, refill the form",set_city:"City is a required field",set_phone:"你沒有填寫電話號碼",error_phone:"無效電話號碼",exit_text:"你是否確定要離開？離你的訂單僅剩一步了！"},km:{set_country:"លោកអ្នកមិនបានជ្រើសរើសប្រទេស",set_house:"House is a required field",set_fio:"លោកអ្នកមិនបានបំពេញឈ្មោះពេញ",error_fio:"ឈ្មោះមិនត្រឹមត្រូវ",set_address:"Address is a required field",error_address:"Invalid address, please, refill the form",set_city:"City is a required field",set_phone:"លោកអ្នកមិនបានបញ្ចូលលេខទូរសព្",error_phone:"លេខទូរសព្ទមិនត្រឹមត្រូវ",exit_text:"តើអ្នកពិតជាចង់ចាកចេញមែនឬទេ? នៅសល់តែមួយជំហានទៀតអ្នកនឹងបញ្ជាទិញបានហើយ!"},nb:{set_country:"Du valgte ikke land",set_house:"House is a required field",set_fio:"Du oppgav ikke fullt navn",set_address:"Address is a required field",error_address:"Invalid address, please, refill the form",set_city:"City is a required field",error_fio:"Ugyldig navn",set_phone:"Du oppgav ikke fullt telefonnummer",error_phone:"Ugyldig telefonnummer",exit_text:"Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!"},nn:{set_country:"Du valgte ikke land",set_house:"House is a required field",set_fio:"Du oppgav ikke fullt navn",error_fio:"Ugyldig navn",set_address:"Address is a required field",error_address:"Invalid address, please, refill the form",set_city:"City is a required field",set_phone:"Du oppgav ikke fullt telefonnummer",error_phone:"Ugyldig telefonnummer",exit_text:"Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!"},no:{set_country:"Du valgte ikke land",set_house:"House is a required field",set_fio:"Du oppgav ikke fullt navn",set_address:"Address is a required field",set_city:"City is a required field",error_address:"Invalid address, please, refill the form",error_fio:"Ugyldig navn",set_phone:"Du oppgav ikke fullt telefonnummer",error_phone:"Ugyldig telefonnummer",exit_text:"Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!"},nb_no:{set_country:"Du valgte ikke land",set_house:"House is a required field",set_fio:"Du oppgav ikke fullt navn",set_address:"Address is a required field",set_city:"City is a required field",error_fio:"Ugyldig navn",set_phone:"Du oppgav ikke fullt telefonnummer",error_address:"Invalid address, please, refill the form",error_phone:"Ugyldig telefonnummer",exit_text:"Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!"},ur:{set_country:"آپ نے ملک کا انتخاب نہیں کیا",set_house:"گھر ایک مطلُوبہ فِیلڈ ہے",set_fio:"آپ نے پورا نام درج نہیں کیا ",set_address:"پتہ ایک مطلُوبہ فِیلڈ ہے",set_city:"شہر ایک مطلُوبہ فِیلڈ ہے",error_fio:"غیر موزوں نام ",error_address:"غیرمعتبرپتہ، برائے مہربانی فارم کو دُوبارہ پُر کریں",set_phone:"آپ نے فون نمبر درج نہیں کیا",error_phone:"آپ نے فون نمبر درج نہیں کیاغیر موزوں فون نمبر",exit_text:"کیا آپ اس صفحے سے جانا چاہتے ہیں؟ آپ اپنا آرڈر بک کرانے سے صرف ایک کلک دوری پر ہیں "},fil:{set_country:"Hindi mo pinili ang bansa",set_house:"House is a required field",set_fio:"Hindi mo pinunan ang buong pangalan",error_fio:"Inbalidong pangalan",set_address:"Address is a required field",set_city:"City is a required field",set_phone:"Hindi mo pinunan ang telepono",error_address:"Invalid address, please, refill the form",error_phone:"Inbalidong numero ng telepono",exit_text:"Sigurado ka bang gusto mong umalis? Ikaw ay isang hakbang nalang mula sa iyong order!"},ar:{set_country:"أنت لم تختر البلاد",set_house:"House is a required field",set_fio:"أنت لم تملء الاسم الكامل",error_fio:"اسم غير صالح",set_address:"Address is a required field",set_city:"City is a required field",set_phone:"أنت لم تدخل رقم الهاتف",error_address:"Invalid address, please, refill the form",error_phone:"رقم الهاتف غير صحيح",exit_text:"هل أنت متأكد أنك تريد أن تغادر؟ كنت للتو في خطوة واحدة من النظام الخاص بك!"},vi:{set_country:"Bạn chưa chọn quốc gia",set_house:"House is a required field",set_fio:"Bạn chưa điền họ tên",error_fio:"Tên không hợp lệ",set_address:"Address is a required field",error_address:"Invalid address, please, refill the form",set_city:"City is a required field",set_phone:"Bạn chưa điền số điện thoại",error_phone:"Số điện thoại không hợp lệ",exit_text:"Bạn có chắc muốn rời đi không? Chỉ còn còn một bước đặt hàng nữa thôi!"},ng:{set_country:"Select country",set_house:"House is a required field",set_fio:"Name is a required field",set_address:"Address is a required field",error_address:"Invalid address, please, refill the form",set_city:"City is a required field",error_fio:"Name field is entered incorrectly",set_phone:"Phone number is a required field",error_phone:"The phone number is entered incorrectly",exit_text:"You really want to close tab?"},rs:{set_country:"Niste odaberete zemlju",set_house:"House is a required field",set_fio:"Niste popunite imenom",set_address:"Address is a required field",set_city:"City is a required field",error_fio:"Invalid format Ime",error_address:"Invalid address, please, refill the form",set_phone:"Niste napuniti telefon",error_phone:"Invalid format Telefon",exit_text:"Da li ste sigurni da želite da zatvorite karticu ? Pre završetka naloga ostaje jedan taster pritisnuti!"},fr:{set_country:"Vous n'avez pas choisi le pays",set_house:"House is a required field",error_address:"Invalid address, please, refill the form",set_fio:"Vous n'avez pas indiqué le nom",error_fio:"Le nom est incorrect",set_address:"Address is a required field",set_city:"City is a required field",set_phone:"Vous n'avez pas indiqué le numéro de téléphone",error_phone:"Le numéro de téléphone est uncorrecte",exit_text:"Êtes-vous sûr de fermer l'onglet ? Il vous reste de cliquer sur un seul bouton pour passer la commande !"},it:{set_country:"Cortesemente compilare questo spazio vuoto",set_house:"House is a required field",set_fio:"Non è stato inserito il nome",set_address:"Address is a required field",set_city:"City is a required field",error_address:"Invalid address, please, refill the form",error_fio:"Errato il nome",set_phone:"Inserire il numero di telefono",error_phone:"Errato il numero di telefono",exit_text:"Sicuro di chiudere la pagina? Per completare l'ordine basta solo premere il bottone!"},de:{set_country:"Das Land ist nicht gewählt.",set_house:"House is a required field",set_fio:"Name ist nicht ausgefüllt",error_fio:"Name ist falsch ausgefüllt",set_phone:"Telefon ist nicht ausgefüllt",set_address:"Ausfüllen Sie die Adresse",set_city:"Ausfüllen Sie die Stadt",error_email:"Falsche E-Mail-Adresse",error_phone:"Telefon ist falsch ausgefüllt",exit_text:"Wirklich diesen Tab schließen? Bis Bestellungsabnahme bleibt nur ein Klick!",error_address:"Falshe Adresse!Bitte korrigieren Sie diese Bestellmaske"},cs:{set_country:"Nezvolil jste zemi",set_fio:"Nevypsal jste jméno, jméno po otci a příjmení",error_fio:"Nesprávně zadané jméno, jméno po otci a příjmení",set_phone:"Nezadal jste Telefonní číslo",error_address:"Invalid address, please, refill the form",error_phone:"Nesprávě zadané Telefonní číslo",set_address:"Address is a required field",set_house:"House is a required field",set_city:"City is a required field",exit_text:"Jistě chcete uzavřít stránku? Abyste ukončil zadání objednávky, náleží stlačit jedno tlačítko!",set_comment:"Řeknete prosím o Vašem problému",set_holder_name:"Zadejte prosím jméno nominanta",set_nomin:"Zadejte prosím nominaci"},cn:{set_country:"You haven’t chosen your country",set_house:"House is a required field",set_fio:"You haven’t entered  your first and last name",set_address:"Address is a required field",set_city:"City is a required field",error_fio:"Your first and last name were entered incorrectly",error_address:"Invalid address, please, refill the form",set_phone:"You haven’t entered your phone number",error_phone:"Your phone number was entered incorrectly",exit_text:"Do you really want to close the tab? Before an order completion  you should press only 1 button!"},sk:{set_country:"Nezadali ste krajinu",set_fio:"Nezadali ste plné meno",error_fio:"Neplatné plné meno",error_address:"Invalid address, please, refill the form",set_address:"Address is a required field",set_city:"City is a required field",set_house:"House is a required field",set_phone:"Nezadali ste telefón",error_phone:"Neplatný telefón",exit_text:"Ste istí, že chcete zatvoriť kartu? Pre dokončenie objednávky zostalo potrebné jedné kliknutie!",set_comment:"Povedzte niečo o svojom probléme",set_holder_name:"Vyplňte meno kandidáta",set_nomin:"Vyplňte nomináciu"},th:{set_country:"คุณไม่ได้ยังไม่ได้เลือกประเทศ",set_fio:"คุณไม่ได้ระบุชื่อจริง",error_fio:"ชื่อนี้ใช้ไม่ได้",set_phone:"คุณยังไม่ได้กรอกเบอร์โทรศัพท์",set_address:"Address is a required field",set_city:"City is a required field",set_house:"House is a required field",error_address:"Invalid address, please, refill the form",error_phone:"เบอร์โทรศัพท์นี้ใช้ไม่ได้",exit_text:"คุณแน่ใจไหมว่าจะออกจากหน้านี้ การสั่งซื้อของคุณเหลืออีกเพียงขั้นตอนเดียวเท่านั้น!",set_comment:"Povedzte niečo o svojom probléme",set_holder_name:"Vyplňte meno kandidáta",set_nomin:"Vyplňte nomináciu"},gr:{set_fio:"Δεν έχετε συμπληρώσει το ονοματεπώνυμο",set_phone:"Μη έγκυρος αριθμός τηλεφώνου",error_address:"Invalid address, please, refill the form",set_address:"Address is a required field",set_house:"House is a required field",set_city:"City is a required field",error_phone:"Λάθος αριθμός τηλεφώνου! Παρακαλώ εισάγετε τον αριθμό του κινητού σας τηλεφώνου ξεκινώντας με 69"},ko:{set_country:"국가를 선택하지 않았습니다",set_fio:"성명을 입력하지 않았습니다",error_fio:"유효하지 않은 이름",set_address:"Address is a required field",set_city:"City is a required field",set_house:"House is a required field",error_address:"Invalid address, please, refill the form",set_phone:"전화번호를 입력하지 않았습니다",error_phone:"유효하지 않은 전화번호",exit_text:"정말 이 페이지에서 나오시겠습니까? 주문까지 오직 한 단계만 남았습니다!"}}};function set_package_prices(e){var r,i,t;void 0!==package_prices[e]&&(r=+package_prices[e].price,i=+package_prices[e].old_price,t=+package_prices[e].shipment_price,$(".js_new_price").each(function(){$(this).is("input")?$(this).val(r):$(this).text(r)}),$(".js_old_price").each(function(){$(this).is("input")?$(this).val(i):$(this).text(i)}),$(".js_full_price").each(function(){$(this).is("input")?$(this).val(r+t):$(this).text(r+t)}),$(".js_delivery_price").each(function(){$(this).is("input")?$(this).val(t):$(this).text(t)}),$("input[name=price]").each(function(){$(this).val(r)}),$("input[name=shipment_price]").each(function(){$(this).val(t)}),$("input[name=total_price]").each(function(){$(this).val(r+t)}),$("input[name=total_price_wo_shipping]").each(function(){$(this).val(r)}),$("input[name=package_id]").val(e))}function checkTimeZone(){var e=(new Date).getTimezoneOffset()/-60;$("form").append('<input type="hidden" name="time_zone" value="'+e+'">')}function setBrowser(){"undefined"!=typeof ua&&$("form").append('<input type="hidden" name="bw" value="'+ua.browser.name+'">')}function sendPhoneOrder(e){e=$(e).serializeArray();e.push({name:"uri_params",value:window.location.search.replace("?","")}),$.ajax({type:"POST",url:"/order/create/",data:e,crossDomain:!0,dataType:"json",success:function(){}})}function cancelEvent(e){try{e&&(e.returnValue=defaults.get_locale_var("exit_text"),e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault())}catch(e){}return defaults.get_locale_var("exit_text")}function RemoveUnload(){window.onbeforeunload=null}function showLoader(){var e=document.createElement("div");e.id="loader-block",e.className="loader-block",document.getElementsByTagName("body")[0].appendChild(e);e={position:"fixed",top:0,left:0,"z-index":9999,width:"100%",height:"100%",background:"url(/!common_files/images/loader.gif) center center rgba(0,0,0,0.5) no-repeat"};$("#loader-block").css(e),$("#loader-block").animate({opacity:0},2e4,function(){hideLoader()})}function hideLoader(){$("#loader-block").remove()}function sendOrderData(r,i){$.post("/order/create/",r,function(e){if($('input[name="esub"]').val(r.esub),r.pixel_code&&$("body").append(r.pixel_code),void 0!==i)return i()})}function renderQueryVariable(){$("#parse-params__brand").text(window.brand),$("#parse-params__model").text(window.model)}