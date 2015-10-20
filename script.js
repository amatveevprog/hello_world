<style>
/* Generated on: Sun Oct 11 2015 17:03:12 GMT+0000 (UTC) */
/* ==========================================================================
   normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css 
   ========================================================================== */
/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}

/* ==========================================================================
   Start of base Webflow CSS - If you're looking for some ultra-clean CSS, skip the boilerplate and see the unminified code below.
   ========================================================================== */
@font-face{font-family:'webflow-icons';src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg6SAy0AAAC8AAAAYGNtYXAaVcxaAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5ZgscV1gAAAFwAAABhGhlYWQCkFKvAAAC9AAAADZoaGVhB0MDyQAAAywAAAAkaG10eBIAA10AAANQAAAAIGxvY2EBMADyAAADcAAAABJtYXhwAAwATQAAA4QAAAAgbmFtZWTuiIAAAAOkAAABe3Bvc3QAAwAAAAAFIAAAACAAAwQAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADmAwPA/8D/wAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIOYD//3//wAAAAAAIOYA//3//wAB/+MaBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQEgAAADIAOAAAUAAAkBBwkBFwMg/kBAAYD+gEABwAHAQP6A/oBAAAEA4AAAAuADgAAFAAATARcJAQfgAcBA/oABgEABwAHAQP6A/oBAAAADAMAA4ANAAsAAGAAxAEoAAAEhIg4CHQEUHgIzITI+Aj0BNC4CIxUhIg4CHQEUHgIzITI+Aj0BNC4CIxUhIg4CHQEUHgIzITI+Aj0BNC4CIwMg/cAHCwkFBQkLBwJABwsJBQUJCwf9wAcLCQUFCQsHAkAHCwkFBQkLB/3ABwsJBQUJCwcCQAcLCQUFCQsHAsAFCQsHIAcLCQUFCQsHIAcLCQXABQkLByAHCwkFBQkLByAHCwkFwAUJCwcgBwsJBQUJCwcgBwsJBQAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFFv+egGGAAAAAAEAAAABAADSLAJOXw889QALBAAAAAAAz/iHGQAAAADP+IcZAAAAAAOBA4AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA4EAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAACAAAABAABIAQAAOAEAADABAAAnQAAAAAACgAUAB4AMgBGAKwAwgAAAAEAAAAIAEsAAwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAaAAAAAQAAAAAAAgAOAHEAAQAAAAAAAwAaADAAAQAAAAAABAAaAH8AAQAAAAAABQAWABoAAQAAAAAABgANAEoAAQAAAAAACgA0AJkAAwABBAkAAQAaAAAAAwABBAkAAgAOAHEAAwABBAkAAwAaADAAAwABBAkABAAaAH8AAwABBAkABQAWABoAAwABBAkABgAaAFcAAwABBAkACgA0AJkAdwBlAGIAZgBsAG8AdwAtAGkAYwBvAG4AcwBWAGUAcgBzAGkAbwBuACAAMQAuADAAdwBlAGIAZgBsAG8AdwAtAGkAYwBvAG4Ac3dlYmZsb3ctaWNvbnMAdwBlAGIAZgBsAG8AdwAtAGkAYwBvAG4AcwBSAGUAZwB1AGwAYQByAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHMARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('truetype'),url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAAVcAAoAAAAABRQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAZMAAAGTuzUomU9TLzIAAAKIAAAAYAAAAGAOkgMtY21hcAAAAugAAABMAAAATBpVzFpnYXNwAAADNAAAAAgAAAAIAAAAEGhlYWQAAAM8AAAANgAAADYCkFKvaGhlYQAAA3QAAAAkAAAAJAdDA8lobXR4AAADmAAAACAAAAAgEgADXW1heHAAAAO4AAAABgAAAAYACFAAbmFtZQAAA8AAAAF7AAABe2TuiIBwb3N0AAAFPAAAACAAAAAgAAMAAAEABAQAAQEBDndlYmZsb3ctaWNvbnMAAQIAAQA6+BwC+BsD+BgEHgoACXf/i4seCgAJd/+LiwwHi0v6lPpUBR0AAACaDx0AAACfER0AAAAJHQAAAYoSAAkBAQ4bHR8iJywxNndlYmZsb3ctaWNvbnN3ZWJmbG93LWljb25zdTB1MXUyMHVFNjAwdUU2MDF1RTYwMnVFNjAzAAACAYkABgAIAQEEBwoNJDvH4P6UDv6UDv6UDvyUDvm0+FQV/FT4VEtL+BT8FPwU/BTLSwUO93T4VBX4VPhUy0v8FPwU+BT8FEtLBQ75tPlUFfzUiwV5i319i3kIi2sFi3mZfZ2LCPjUiwWdi5mZi50Ii6sFi519mXmLCIv7VBX81IsFeYt9fYt5CItrBYt5mX2diwj41IsFnYuZmYudCIurBYudfZl5iwiL+1QV/NSLBXmLfX2LeQiLawWLeZl9nYsI+NSLBZ2LmZmLnQiLqwWLnX2ZeYsIDvm4+SkV+6n7qvuq96ovLvgG/Bj4BvgYBQ76lBT6lBWLDAoAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA5gMDwP/A/8ADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAA4AAAACgAIAAIAAgABACDmA//9//8AAAAAACDmAP/9//8AAf/jGgQAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAABAAC1pQTjXw889QALBAAAAAAAz/iHGQAAAADP+IcZAAAAAAOBA4AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA4EAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAACAAAABAABIAQAAOAEAADABAAAnQAAUAAACAAAAAAADgCuAAEAAAAAAAEAGgAAAAEAAAAAAAIADgBxAAEAAAAAAAMAGgAwAAEAAAAAAAQAGgB/AAEAAAAAAAUAFgAaAAEAAAAAAAYADQBKAAEAAAAAAAoANACZAAMAAQQJAAEAGgAAAAMAAQQJAAIADgBxAAMAAQQJAAMAGgAwAAMAAQQJAAQAGgB/AAMAAQQJAAUAFgAaAAMAAQQJAAYAGgBXAAMAAQQJAAoANACZAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHMAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHN3ZWJmbG93LWljb25zAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHMAUgBlAGcAdQBsAGEAcgB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');font-weight:normal;font-style:normal}[class^="w-icon-"],[class*=" w-icon-"]{font-family:'webflow-icons';speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-icon-slider-right:before{content:"\e600"}.w-icon-slider-left:before{content:"\e601"}.w-icon-nav-menu:before{content:"\e602"}.w-icon-arrow-down:before,.w-icon-dropdown-toggle:before{content:"\e603"}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{height:100%}body{margin:0;min-height:100%;background-color:#fff;font-family:Arial,sans-serif;font-size:14px;line-height:20px;color:#333}img{max-width:100%;vertical-align:middle;display:inline-block}html.w-mod-touch *{background-attachment:scroll !important}.w-block{display:block}.w-inline-block{max-width:100%;display:inline-block}.w-clearfix:before,.w-clearfix:after{content:" ";display:table}.w-clearfix:after{clear:both}.w-hidden{display:none}.w-button{display:inline-block;padding:9px 15px;background-color:#3898ec;color:white;border:0;line-height:inherit;text-decoration:none;cursor:pointer;border-radius:0}.w-button[href-disabled]{color:white;text-decoration:none}input.w-button{-webkit-appearance:button}html[data-w-dynpage] [data-w-cloak]{color:transparent !important}h1,h2,h3,h4,h5,h6{font-weight:bold;margin-bottom:10px}h1{font-size:38px;line-height:44px;margin-top:20px}h2{font-size:32px;line-height:36px;margin-top:20px}h3{font-size:24px;line-height:30px;margin-top:20px}h4{font-size:18px;line-height:24px;margin-top:10px}h5{font-size:14px;line-height:20px;margin-top:10px}h6{font-size:12px;line-height:18px;margin-top:10px}p{margin-top:0;margin-bottom:10px}a{color:#0082f3;text-decoration:underline}a:focus{outline:0}blockquote{margin:0 0 10px 0;padding:10px 20px;border-left:5px solid #e2e2e2;font-size:18px;line-height:22px}figure{margin:0;margin-bottom:10px}figcaption{margin-top:5px;text-align:center}ul,ol{margin-top:0;margin-bottom:0;padding-left:40px}.w-list-unstyled{padding-left:0;list-style:none}.w-embed:before,.w-embed:after{content:" ";display:table}.w-embed:after{clear:both}.w-video{width:100%;position:relative;padding:0}.w-video iframe,.w-video object,.w-video embed{position:absolute;top:0;left:0;width:100%;height:100%}fieldset{padding:0;margin:0;border:0}button,html input[type="button"],input[type="reset"]{border:0;cursor:pointer;-webkit-appearance:button}.w-form{margin:0 0 15px}.w-form-done{display:none;padding:20px;text-align:center;background-color:#ddd}.w-form-fail{display:none;margin-top:10px;padding:10px;background-color:#ffdede}label{display:block;margin-bottom:5px;font-weight:bold}.w-input,.w-select{display:block;width:100%;height:38px;padding:8px 12px;margin-bottom:10px;font-size:14px;line-height:1.42857143;color:#333;vertical-align:middle;background-color:#fff;border:1px solid #ccc}.w-input:-moz-placeholder,.w-select:-moz-placeholder{color:#999}.w-input::-moz-placeholder,.w-select::-moz-placeholder{color:#999;opacity:1}.w-input:-ms-input-placeholder,.w-select:-ms-input-placeholder{color:#999}.w-input::-webkit-input-placeholder,.w-select::-webkit-input-placeholder{color:#999}.w-input:focus,.w-select:focus{border-color:#3898ec;outline:0}.w-input[disabled],.w-select[disabled],.w-input[readonly],.w-select[readonly],fieldset[disabled] .w-input,fieldset[disabled] .w-select{cursor:not-allowed;background-color:#eee}textarea.w-input,textarea.w-select{height:auto}.w-select{background-image:-webkit-linear-gradient(white 0, #f3f3f3 100%);background-image:linear-gradient(white 0, #f3f3f3 100%)}.w-select[multiple]{height:auto}.w-form-label{display:inline-block;cursor:pointer;font-weight:normal;margin-bottom:0}.w-checkbox,.w-radio{display:block;margin-bottom:5px;padding-left:20px}.w-checkbox:before,.w-radio:before,.w-checkbox:after,.w-radio:after{content:" ";display:table}.w-checkbox:after,.w-radio:after{clear:both}.w-checkbox-input,.w-radio-input{margin:4px 0 0;margin-top:1px \9;line-height:normal;float:left;margin-left:-20px}.w-radio-input{margin-top:3px}.w-container{margin-left:auto;margin-right:auto;max-width:940px}.w-container:before,.w-container:after{content:" ";display:table}.w-container:after{clear:both}.w-container .w-row{margin-left:-10px;margin-right:-10px}.w-row:before,.w-row:after{content:" ";display:table}.w-row:after{clear:both}.w-row .w-row{margin-left:0;margin-right:0}.w-col{position:relative;float:left;width:100%;min-height:1px;padding-left:10px;padding-right:10px}.w-col .w-col{padding-left:0;padding-right:0}.w-col-1{width:8.33333333%}.w-col-2{width:16.66666667%}.w-col-3{width:25%}.w-col-4{width:33.33333333%}.w-col-5{width:41.66666667%}.w-col-6{width:50%}.w-col-7{width:58.33333333%}.w-col-8{width:66.66666667%}.w-col-9{width:75%}.w-col-10{width:83.33333333%}.w-col-11{width:91.66666667%}.w-col-12{width:100%}.w-col-push-1{left:8.33333333%}.w-col-push-2{left:16.66666667%}.w-col-push-3{left:25%}.w-col-push-4{left:33.33333333%}.w-col-push-5{left:41.66666667%}.w-col-push-6{left:50%}.w-col-push-7{left:58.33333333%}.w-col-push-8{left:66.66666667%}.w-col-push-9{left:75%}.w-col-push-10{left:83.33333333%}.w-col-push-11{left:91.66666667%}.w-col-pull-1{right:8.33333333%}.w-col-pull-2{right:16.66666667%}.w-col-pull-3{right:25%}.w-col-pull-4{right:33.33333333%}.w-col-pull-5{right:41.66666667%}.w-col-pull-6{right:50%}.w-col-pull-7{right:58.33333333%}.w-col-pull-8{right:66.66666667%}.w-col-pull-9{right:75%}.w-col-pull-10{right:83.33333333%}.w-col-pull-11{right:91.66666667%}.w-col-offset-1{margin-left:8.33333333%}.w-col-offset-2{margin-left:16.66666667%}.w-col-offset-3{margin-left:25%}.w-col-offset-4{margin-left:33.33333333%}.w-col-offset-5{margin-left:41.66666667%}.w-col-offset-6{margin-left:50%}.w-col-offset-7{margin-left:58.33333333%}.w-col-offset-8{margin-left:66.66666667%}.w-col-offset-9{margin-left:75%}.w-col-offset-10{margin-left:83.33333333%}.w-col-offset-11{margin-left:91.66666667%}.w-hidden-main{display:none !important}@media screen and (max-width:991px){.w-container{max-width:728px}.w-hidden-main{display:inherit !important}.w-hidden-medium{display:none !important}.w-col-medium-1{width:8.33333333%}.w-col-medium-2{width:16.66666667%}.w-col-medium-3{width:25%}.w-col-medium-4{width:33.33333333%}.w-col-medium-5{width:41.66666667%}.w-col-medium-6{width:50%}.w-col-medium-7{width:58.33333333%}.w-col-medium-8{width:66.66666667%}.w-col-medium-9{width:75%}.w-col-medium-10{width:83.33333333%}.w-col-medium-11{width:91.66666667%}.w-col-medium-12{width:100%}.w-col-medium-push-1{left:8.33333333%}.w-col-medium-push-2{left:16.66666667%}.w-col-medium-push-3{left:25%}.w-col-medium-push-4{left:33.33333333%}.w-col-medium-push-5{left:41.66666667%}.w-col-medium-push-6{left:50%}.w-col-medium-push-7{left:58.33333333%}.w-col-medium-push-8{left:66.66666667%}.w-col-medium-push-9{left:75%}.w-col-medium-push-10{left:83.33333333%}.w-col-medium-push-11{left:91.66666667%}.w-col-medium-pull-1{right:8.33333333%}.w-col-medium-pull-2{right:16.66666667%}.w-col-medium-pull-3{right:25%}.w-col-medium-pull-4{right:33.33333333%}.w-col-medium-pull-5{right:41.66666667%}.w-col-medium-pull-6{right:50%}.w-col-medium-pull-7{right:58.33333333%}.w-col-medium-pull-8{right:66.66666667%}.w-col-medium-pull-9{right:75%}.w-col-medium-pull-10{right:83.33333333%}.w-col-medium-pull-11{right:91.66666667%}.w-col-medium-offset-1{margin-left:8.33333333%}.w-col-medium-offset-2{margin-left:16.66666667%}.w-col-medium-offset-3{margin-left:25%}.w-col-medium-offset-4{margin-left:33.33333333%}.w-col-medium-offset-5{margin-left:41.66666667%}.w-col-medium-offset-6{margin-left:50%}.w-col-medium-offset-7{margin-left:58.33333333%}.w-col-medium-offset-8{margin-left:66.66666667%}.w-col-medium-offset-9{margin-left:75%}.w-col-medium-offset-10{margin-left:83.33333333%}.w-col-medium-offset-11{margin-left:91.66666667%}.w-col-stack{width:100%;left:auto;right:auto}}@media screen and (max-width:767px){.w-hidden-main{display:inherit !important}.w-hidden-medium{display:inherit !important}.w-hidden-small{display:none !important}.w-row,.w-container .w-row{margin-left:0;margin-right:0}.w-col{width:100%;left:auto;right:auto}.w-col-small-1{width:8.33333333%}.w-col-small-2{width:16.66666667%}.w-col-small-3{width:25%}.w-col-small-4{width:33.33333333%}.w-col-small-5{width:41.66666667%}.w-col-small-6{width:50%}.w-col-small-7{width:58.33333333%}.w-col-small-8{width:66.66666667%}.w-col-small-9{width:75%}.w-col-small-10{width:83.33333333%}.w-col-small-11{width:91.66666667%}.w-col-small-12{width:100%}.w-col-small-push-1{left:8.33333333%}.w-col-small-push-2{left:16.66666667%}.w-col-small-push-3{left:25%}.w-col-small-push-4{left:33.33333333%}.w-col-small-push-5{left:41.66666667%}.w-col-small-push-6{left:50%}.w-col-small-push-7{left:58.33333333%}.w-col-small-push-8{left:66.66666667%}.w-col-small-push-9{left:75%}.w-col-small-push-10{left:83.33333333%}.w-col-small-push-11{left:91.66666667%}.w-col-small-pull-1{right:8.33333333%}.w-col-small-pull-2{right:16.66666667%}.w-col-small-pull-3{right:25%}.w-col-small-pull-4{right:33.33333333%}.w-col-small-pull-5{right:41.66666667%}.w-col-small-pull-6{right:50%}.w-col-small-pull-7{right:58.33333333%}.w-col-small-pull-8{right:66.66666667%}.w-col-small-pull-9{right:75%}.w-col-small-pull-10{right:83.33333333%}.w-col-small-pull-11{right:91.66666667%}.w-col-small-offset-1{margin-left:8.33333333%}.w-col-small-offset-2{margin-left:16.66666667%}.w-col-small-offset-3{margin-left:25%}.w-col-small-offset-4{margin-left:33.33333333%}.w-col-small-offset-5{margin-left:41.66666667%}.w-col-small-offset-6{margin-left:50%}.w-col-small-offset-7{margin-left:58.33333333%}.w-col-small-offset-8{margin-left:66.66666667%}.w-col-small-offset-9{margin-left:75%}.w-col-small-offset-10{margin-left:83.33333333%}.w-col-small-offset-11{margin-left:91.66666667%}}@media screen and (max-width:479px){.w-container{max-width:none}.w-hidden-main{display:inherit !important}.w-hidden-medium{display:inherit !important}.w-hidden-small{display:inherit !important}.w-hidden-tiny{display:none !important}.w-col{width:100%}.w-col-tiny-1{width:8.33333333%}.w-col-tiny-2{width:16.66666667%}.w-col-tiny-3{width:25%}.w-col-tiny-4{width:33.33333333%}.w-col-tiny-5{width:41.66666667%}.w-col-tiny-6{width:50%}.w-col-tiny-7{width:58.33333333%}.w-col-tiny-8{width:66.66666667%}.w-col-tiny-9{width:75%}.w-col-tiny-10{width:83.33333333%}.w-col-tiny-11{width:91.66666667%}.w-col-tiny-12{width:100%}.w-col-tiny-push-1{left:8.33333333%}.w-col-tiny-push-2{left:16.66666667%}.w-col-tiny-push-3{left:25%}.w-col-tiny-push-4{left:33.33333333%}.w-col-tiny-push-5{left:41.66666667%}.w-col-tiny-push-6{left:50%}.w-col-tiny-push-7{left:58.33333333%}.w-col-tiny-push-8{left:66.66666667%}.w-col-tiny-push-9{left:75%}.w-col-tiny-push-10{left:83.33333333%}.w-col-tiny-push-11{left:91.66666667%}.w-col-tiny-pull-1{right:8.33333333%}.w-col-tiny-pull-2{right:16.66666667%}.w-col-tiny-pull-3{right:25%}.w-col-tiny-pull-4{right:33.33333333%}.w-col-tiny-pull-5{right:41.66666667%}.w-col-tiny-pull-6{right:50%}.w-col-tiny-pull-7{right:58.33333333%}.w-col-tiny-pull-8{right:66.66666667%}.w-col-tiny-pull-9{right:75%}.w-col-tiny-pull-10{right:83.33333333%}.w-col-tiny-pull-11{right:91.66666667%}.w-col-tiny-offset-1{margin-left:8.33333333%}.w-col-tiny-offset-2{margin-left:16.66666667%}.w-col-tiny-offset-3{margin-left:25%}.w-col-tiny-offset-4{margin-left:33.33333333%}.w-col-tiny-offset-5{margin-left:41.66666667%}.w-col-tiny-offset-6{margin-left:50%}.w-col-tiny-offset-7{margin-left:58.33333333%}.w-col-tiny-offset-8{margin-left:66.66666667%}.w-col-tiny-offset-9{margin-left:75%}.w-col-tiny-offset-10{margin-left:83.33333333%}.w-col-tiny-offset-11{margin-left:91.66666667%}}.w-widget{position:relative}.w-widget-map{width:100%;height:400px}.w-widget-map label{width:auto;display:inline}.w-widget-map img{max-width:inherit}.w-widget-map .gm-style-iw{width:90% !important;height:auto !important;top:7px !important;left:6% !important;display:inline;text-align:center;overflow:hidden}.w-widget-map .gm-style-iw+div{display:none}.w-widget-twitter{overflow:hidden}.w-widget-gplus{overflow:hidden}.w-slider{position:relative;height:300px;text-align:center;background:#ddd;clear:both;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0)}.w-slider-mask{position:relative;display:block;overflow:hidden;z-index:1;left:0;right:0;height:100%;white-space:nowrap}.w-slide{position:relative;display:inline-block;vertical-align:top;width:100%;height:100%;white-space:normal;text-align:left}.w-slider-nav{position:absolute;z-index:2;top:auto;right:0;bottom:0;left:0;margin:auto;padding-top:10px;height:40px;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0)}.w-slider-nav.w-round>div{-webkit-border-radius:100%;-webkit-background-clip:padding-box;-moz-border-radius:100%;-moz-background-clip:padding;border-radius:100%;background-clip:padding-box}.w-slider-nav.w-num>div{width:auto;height:auto;padding:.2em .5em;font-size:inherit;line-height:inherit}.w-slider-nav.w-shadow>div{-webkit-box-shadow:0 0 3px rgba(51, 51, 51, 0.4);-moz-box-shadow:0 0 3px rgba(51, 51, 51, 0.4);box-shadow:0 0 3px rgba(51, 51, 51, 0.4)}.w-slider-nav-invert{color:#fff}.w-slider-nav-invert>div{background-color:rgba(34,34,34,0.4)}.w-slider-nav-invert>div.w-active{background-color:#222}.w-slider-dot{position:relative;display:inline-block;width:1em;height:1em;background-color:rgba(255,255,255,0.4);cursor:pointer;margin:0 3px .5em;-webkit-transition:background-color 100ms, color 100ms;-moz-transition:background-color 100ms, color 100ms;-o-transition:background-color 100ms, color 100ms;transition:background-color 100ms, color 100ms}.w-slider-dot.w-active{background-color:#fff}.w-slider-arrow-left,.w-slider-arrow-right{position:absolute;width:80px;top:0;right:0;bottom:0;left:0;margin:auto;cursor:pointer;overflow:hidden;color:white;font-size:40px;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w-slider-arrow-left [class^="w-icon-"],.w-slider-arrow-right [class^="w-icon-"],.w-slider-arrow-left [class*=" w-icon-"],.w-slider-arrow-right [class*=" w-icon-"]{position:absolute}.w-slider-arrow-left{z-index:3;right:auto}.w-slider-arrow-right{z-index:4;left:auto}.w-icon-slider-left,.w-icon-slider-right{top:0;right:0;bottom:0;left:0;margin:auto;width:1em;height:1em}.w-dropdown{display:inline-block;position:relative;text-align:left;margin-left:auto;margin-right:auto;z-index:900}.w-dropdown-btn,.w-dropdown-toggle,.w-dropdown-link{position:relative;vertical-align:top;text-decoration:none;color:#222;padding:20px;text-align:left;margin-left:auto;margin-right:auto;white-space:nowrap}.w-dropdown-toggle{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;cursor:pointer;padding-right:40px}.w-dropdown-toggle:focus{outline:0}.w-icon-dropdown-toggle{position:absolute;top:0;right:0;bottom:0;margin:auto;margin-right:20px;width:1em;height:1em}.w-dropdown-list{position:absolute;background:#ddd;display:none;min-width:100%}.w-dropdown-list.w--open{display:block}.w-dropdown-link{padding:10px 20px;display:block;color:#222}.w-dropdown-link:hover{color:#222;text-decoration:none}.w-dropdown-link.w--current{color:#0082f3}.w-nav[data-collapse="all"] .w-dropdown,.w-nav[data-collapse="all"] .w-dropdown-toggle{display:block}.w-nav[data-collapse="all"] .w-dropdown-list{position:static}@media screen and (max-width:991px){.w-nav[data-collapse="medium"] .w-dropdown,.w-nav[data-collapse="medium"] .w-dropdown-toggle{display:block}.w-nav[data-collapse="medium"] .w-dropdown-list{position:static}}@media screen and (max-width:767px){.w-nav[data-collapse="small"] .w-dropdown,.w-nav[data-collapse="small"] .w-dropdown-toggle{display:block}.w-nav[data-collapse="small"] .w-dropdown-list{position:static}.w-nav-brand{padding-left:10px}}@media screen and (max-width:479px){.w-nav[data-collapse="tiny"] .w-dropdown,.w-nav[data-collapse="tiny"] .w-dropdown-toggle{display:block}.w-nav[data-collapse="tiny"] .w-dropdown-list{position:static}}.w-lightbox-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;color:#fff;font-family:"Helvetica Neue",Helvetica,Ubuntu,"Segoe UI",Verdana,sans-serif;font-size:17px;font-weight:300;text-align:center;background:rgba(0,0,0,0.9);z-index:2000;outline:0;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-tap-highlight-color:transparent;-webkit-transform:translate(0, 0)}.w-lightbox-backdrop,.w-lightbox-container{height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.w-lightbox-content{position:relative;height:100vh;overflow:hidden}.w-lightbox-view{position:absolute;width:100vw;height:100vh;opacity:0}.w-lightbox-view:before{content:"";height:100vh}.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before{height:86vh}.w-lightbox-frame,.w-lightbox-view:before{display:inline-block;vertical-align:middle}.w-lightbox-figure{position:relative;margin:0}.w-lightbox-group .w-lightbox-figure{cursor:pointer}.w-lightbox-img{width:auto;height:auto;max-width:none}.w-lightbox-image{display:block;max-width:100vw;max-height:100vh}.w-lightbox-group .w-lightbox-image{max-height:86vh}.w-lightbox-caption{position:absolute;right:0;bottom:0;left:0;padding:.5em 1em;background:rgba(0,0,0,0.4);text-align:left;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.w-lightbox-embed{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%}.w-lightbox-control{position:absolute;top:0;width:4em;background-size:24px;background-repeat:no-repeat;background-position:center;cursor:pointer;-webkit-transition:all .3s;transition:all .3s}.w-lightbox-left{display:none;bottom:0;left:0;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==")}.w-lightbox-right{display:none;right:0;bottom:0;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+")}.w-lightbox-close{right:0;height:2.6em;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");background-size:18px}.w-lightbox-strip{padding:0 1vh;line-height:0;white-space:nowrap;overflow-x:auto;overflow-y:hidden}.w-lightbox-item{display:inline-block;width:10vh;padding:2vh 1vh;box-sizing:content-box;cursor:pointer;-webkit-transform:translate3d(0, 0, 0)}.w-lightbox-active{opacity:.3}.w-lightbox-thumbnail{position:relative;height:10vh;background:#222;overflow:hidden}.w-lightbox-thumbnail-image{position:absolute;top:0;left:0}.w-lightbox-thumbnail .w-lightbox-tall{top:50%;width:100%;-webkit-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%)}.w-lightbox-thumbnail .w-lightbox-wide{left:50%;height:100%;-webkit-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}.w-lightbox-spinner{position:absolute;top:50%;left:50%;box-sizing:border-box;width:40px;height:40px;margin-top:-20px;margin-left:-20px;border:5px solid rgba(0,0,0,0.4);border-radius:50%;-webkit-animation:spin .8s infinite linear;animation:spin .8s infinite linear}.w-lightbox-spinner:after{content:"";position:absolute;top:-4px;right:-4px;bottom:-4px;left:-4px;border:3px solid transparent;border-bottom-color:#fff;border-radius:50%}.w-lightbox-hide{display:none}.w-lightbox-noscroll{overflow:hidden}@media (min-width:768px){.w-lightbox-content{height:96vh;margin-top:2vh}.w-lightbox-view,.w-lightbox-view:before{height:96vh}.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before{height:84vh}.w-lightbox-image{max-width:96vw;max-height:96vh}.w-lightbox-group .w-lightbox-image{max-width:82.3vw;max-height:84vh}.w-lightbox-left,.w-lightbox-right{display:block;opacity:.5}.w-lightbox-close{opacity:.8}.w-lightbox-control:hover{opacity:1}}.w-lightbox-inactive,.w-lightbox-inactive:hover{opacity:0}.w-richtext:before,.w-richtext:after{content:" ";display:table}.w-richtext:after{clear:both}.w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:before{outline:2px solid #2895f7}.w-richtext .w-richtext-figure-selected[data-rt-type="image"] div{outline:2px solid #2895f7}.w-richtext figure[data-rt-type="video"]>div:before{content:'';position:absolute;display:none;left:0;top:0;right:0;bottom:0;z-index:1}.w-richtext figure{position:relative;max-width:60%}.w-richtext figure>div:before,.w-richtext figure img{cursor:default !important}.w-richtext figure img{width:100%}.w-richtext figure figcaption.w-richtext-figcaption-placeholder{opacity:.6}.w-richtext figure div{font-size:0;color:transparent}.w-richtext figure[data-rt-type="image"]{display:table}.w-richtext figure[data-rt-type="image"]>div{display:inline-block}.w-richtext figure[data-rt-type="image"]>figcaption{display:table-caption;caption-side:bottom}.w-richtext figure[data-rt-type="video"]{width:60%;height:0}.w-richtext figure[data-rt-type="video"] iframe{position:absolute;top:0;left:0;width:100%;height:100%}.w-richtext figure[data-rt-type="video"]>div{width:100%}.w-richtext figure.w-richtext-align-center{margin-right:auto;margin-left:auto;clear:both}.w-richtext figure.w-richtext-align-center[data-rt-type="image"]>div{max-width:100%}.w-richtext figure.w-richtext-align-normal{clear:both}.w-richtext figure.w-richtext-align-fullwidth{width:100%;text-align:center;clear:both;display:block}.w-richtext figure.w-richtext-align-fullwidth>div{display:inline-block}.w-richtext figure.w-richtext-align-fullwidth>figcaption{display:block}.w-richtext figure.w-richtext-align-floatleft{float:left;margin-right:15px;clear:none}.w-richtext figure.w-richtext-align-floatright{float:right;margin-left:15px;clear:none}.wf-design-mode figure[data-rt-type="video"]>div:before,.w-editor-mount .w-dyn-list figure[data-rt-type="video"]>div:before,.w-editor-mount .w-editable figure[data-rt-type="video"]>div:before{display:block}.w-nav{position:relative;background:#ddd;z-index:1000}.w-nav:before,.w-nav:after{content:" ";display:table}.w-nav:after{clear:both}.w-nav-brand{position:relative;float:left;text-decoration:none;color:#333}.w-nav-brand:hover{text-decoration:none;color:#333}.w-nav-link{position:relative;display:inline-block;vertical-align:top;text-decoration:none;color:#222;padding:20px;text-align:left;margin-left:auto;margin-right:auto}.w-nav-link:hover{text-decoration:none;color:#222}.w-nav-link.w--current{color:#0082f3}.w-nav-menu{position:relative;float:right}.w--nav-menu-open{display:block !important;position:absolute;top:100%;left:0;right:0;background:#c8c8c8;text-align:center;overflow:visible;min-width:200px}.w--nav-link-open{display:block;position:relative}.w-nav-overlay{position:absolute;overflow:hidden;display:none;top:100%;left:0;right:0;width:100%}.w-nav-overlay .w--nav-menu-open{top:0}.w-nav[data-animation="over-left"] .w-nav-overlay{width:auto}.w-nav[data-animation="over-left"] .w-nav-overlay,.w-nav[data-animation="over-left"] .w--nav-menu-open{right:auto;z-index:1;top:0}.w-nav[data-animation="over-right"] .w-nav-overlay{width:auto}.w-nav[data-animation="over-right"] .w-nav-overlay,.w-nav[data-animation="over-right"] .w--nav-menu-open{left:auto;z-index:1;top:0}.w-nav-button{position:relative;float:right;padding:18px;font-size:24px;display:none;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w-nav-button.w--open{background-color:#c8c8c8;color:white}.w-nav[data-collapse="all"] .w-nav-menu{display:none}.w-nav[data-collapse="all"] .w-nav-button{display:block}@media screen and (max-width:991px){.w-nav[data-collapse="medium"] .w-nav-menu{display:none}.w-nav[data-collapse="medium"] .w-nav-button{display:block}}@media screen and (max-width:767px){.w-nav[data-collapse="small"] .w-nav-menu{display:none}.w-nav[data-collapse="small"] .w-nav-button{display:block}.w-nav-brand{padding-left:10px}}@media screen and (max-width:479px){.w-nav[data-collapse="tiny"] .w-nav-menu{display:none}.w-nav[data-collapse="tiny"] .w-nav-button{display:block}}.w-tabs{position:relative}.w-tabs:before,.w-tabs:after{content:" ";display:table}.w-tabs:after{clear:both}.w-tab-menu{position:relative}.w-tab-link{position:relative;display:inline-block;vertical-align:top;text-decoration:none;padding:9px 30px;text-align:left;cursor:pointer;color:#222;background-color:#ddd}.w-tab-link.w--current{background-color:#c8c8c8}.w-tab-content{position:relative;display:block;overflow:hidden}.w-tab-pane{position:relative;display:none}.w--tab-active{display:block}@media screen and (max-width:479px){.w-tab-link{display:block}}.w-ix-emptyfix:after{content:""}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.w-dyn-empty{padding:10px;background-color:#ddd}

/* ==========================================================================
   Start of custom Webflow CSS
   */
.main {
  position: static;
  display: block;
  height: 613px;
  background-image: url('images/shapka (1).png');
  background-position: 0px 0px;
  background-size: cover;
}
.columns_main {
  height: 180px;
  margin-top: 227px;
  margin-bottom: 112px;
}
.menubutton {
  margin-top: 18px;
  margin-left: 111px;
  padding-right: 63px;
  padding-left: 68px;
  border-style: none;
  border-color: rgba(235, 0, 0, 0.97);
  border-radius: 0px;
  color: black;
}
.ceremonies {
  height: 100px;
}
._2 {
  height: 619px;
  padding-top: 36px;
  padding-bottom: 26px;
}
.col1 {
  position: static;
  display: inline-block;
  overflow-x: visible;
  overflow-y: visible;
  margin-top: -20px;
  padding-right: 0px;
  padding-left: 18px;
  float: left;
  clear: none;
  text-align: left;
}
.col1.maincol {
  display: inline-block;
  padding-left: 16px;
}
.test {
  position: relative;
  top: 0px;
  right: 0px;
  overflow-x: visible;
  overflow-y: visible;
  margin-top: 89px;
  margin-right: 2px;
  margin-left: 4px;
  padding: 0px 113px 2px 89px;
  float: left;
  clear: left;
  border-bottom-left-radius: 3px;
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white);
  font-family: Montserrat, sans-serif;
  color: #666;
  font-size: 27px;
}
.iconphone {
  margin-top: -60px;
  margin-right: 11px;
  margin-left: 52px;
  padding-top: 9px;
  padding-right: 0px;
  float: left;
  clear: left;
}
.tre {
  display: block;
  width: 200px;
  margin: 43px 87px -1px 83px;
  padding: 17px 0px 13px;
  float: left;
  border-radius: 202px;
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white);
}
.tre.tr1 {
  position: static;
  width: 133px;
  margin-top: 40px;
  margin-right: 92px;
  margin-bottom: auto;
}
.text {
  position: static;
  left: auto;
  top: auto;
  right: auto;
  bottom: auto;
  display: inline-block;
  margin: auto auto auto 0px;
  padding: 50px 30px 51px 29px;
  float: none;
  clear: none;
  border-color: transparent;
  border-radius: 346px;
  background-color: rgba(255, 255, 255, 0.04);
  font-family:'Droid Sans', sans-serif;
  font-size: 18px;
  text-align: center;
}
.text.ttle {
  display: inline-block;
  margin-left: auto;
  text-align: center;
}
.text.mainn {
  display: inline-block;
  width: 100%;
  height: 13px;
  margin-left: auto;
  padding-left: 6px;
}
.getfeedback {
  margin-top: 7px;
  margin-right: -4px;
  padding-right: 1px;
}
.feedback {
  height: 38px;
  margin-right: 11px;
  margin-bottom: 0px;
  margin-left: -2px;
}
.feedbackbutton {
  width: 261px;
  margin-top: 1px;
  border-radius: 11px;
  background-color: #0976d6;
  background-image: -webkit-linear-gradient(#1667b2, #1d9bd7);
  background-image: linear-gradient(#1667b2, #1d9bd7);
}
.txt {
  display: inline-block;
  width: 149%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 28px;
  padding-left: 36px;
  float: left;
  clear: none;
  border-radius: 67px;
  font-family: Exo, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  text-indent: 23px;
  list-style-type: none;
}
.img_rounded {
  border-radius: 187px;
}
.img_round {
  margin-bottom: 4px;
  border-radius: 205px;
}
.t1 {
  height: 69px;
  margin-top: 43px;
  margin-bottom: 24px;
  background-image: -webkit-linear-gradient(#393d81 96%, white 98%);
  background-image: linear-gradient(#393d81 96%, white 98%);
}
.img_title {
  display: block;
  margin-top: -164px;
  border-color: #e40909;
}
.img_tite {
  margin-top: -164px;
  opacity: 1;
  font-style: normal;
}
.middletite {
  display: block;
  overflow-x: visible;
  overflow-y: visible;
  width: 100%;
  height: auto;
  margin: auto;
  padding-top: 1px;
  padding-left: 26px;
  float: none;
  background-color: #0088e2;
}
.second {
  background-image: -webkit-linear-gradient(black, black 96%);
  background-image: linear-gradient(black, black 96%);
}
.rimg {
  width: 250px;
  height: 250px;
  max-height: 500%;
  max-width: 500%;
  min-height: auto;
  min-width: auto;
  border-radius: 208px;
  background-image: url('images/q6Z5LQ4LWVo.jpg');
  background-position: 0px 0px;
  background-size: 320px;
}
.rimg._11 {
  margin-right: auto;
  margin-left: auto;
}
.rimg._12 {
  display: block;
  margin: auto;
  padding-bottom: 1px;
  background-image: url('images/_YLD3XUb-Wc.jpg');
  background-size: 320px;
}
.rimg._13 {
  margin-right: auto;
  margin-left: auto;
  background-image: url('images/lG0WC45HUpY.jpg');
  background-size: 320px;
}
.rimg._14 {
  margin-right: auto;
  margin-left: auto;
}
.catalog {
  height: 990px;
}
.new {
  margin-bottom: 6.66667e+07px;
}
.phone_block {
  width: 260px;
  height: 60px;
  margin-bottom: 5px;
  border-radius: 99px;
  background-color: rgba(250, 250, 250, 0.76);
}
.phone_block:hover {
  background-color: #fafafa;
}
.phonetxt {
  display: block;
  padding-top: 19px;
  padding-bottom: 0px;
  float: left;
  font-family:'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  font-size: 24px;
  text-align: center;
}
.icon {
  float: left;
}
.menucol {
  position: static;
  display: inline;
}
.menuitem {
  display: block;
  height: 35px;
  padding-bottom: 0px;
  background-color: rgba(69, 62, 199, 0);
  color: #fafafa;
  text-align: center;
}
.menuitem:hover {
  background-color: #453ec7;
}
.menutitleblock {
  position: absolute;
  top: 249px;
  display: block;
  width: 492px;
  margin: 1px auto 0px;
  clear: left;
}
.menutitle {
  position: static;
  left: 0px;
  top: -3px;
  right: 0px;
  bottom: -3px;
  display: inline-block;
  width: 454px;
  margin: 55% auto 0px 31px;
  padding-bottom: 5px;
  font-size: 30px;
  text-align: center;
}
.qwerty {
  bottom: -1px;
}
.row {
  position: relative;
  display: inline-block;
}
.c {
  padding-left: 103px;
}
.right_column {
  top: 0px;
  right: 0px;
  bottom: 0px;
  display: inline;
  margin-right: auto;
  margin-left: auto;
}
.left_column {
  left: auto;
  right: auto;
  bottom: auto;
  height: auto;
}
.menu {
  position: relative;
  top: 50%;
}
.mtitle {
  position: relative;
  top: 227%;
}
.m-item {
  display: block;
  float: left;
  clear: none;
  font-family: Georgia, Times, 'Times New Roman', serif;
  font-size: 24px;
}
.m-block {
  display: block;
  padding-top: 14%;
}

.menu-item 
{
  clear: left;
  opacity:0,5;
}



}
.menu-icon 
{
  float: left;
  clear: none;
  opacity:0;
}
@media (max-width: 991px) {
}
