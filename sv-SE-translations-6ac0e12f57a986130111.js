(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1190:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.messages=r.locale=r.areTranslationsLoaded=void 0;var t,n=a(7),i=a(1319),o=(t=i)&&t.__esModule?t:{default:t};(0,n.addLocaleData)(o.default);r.areTranslationsLoaded=!0,r.locale="sv-SE",r.messages={"Terra.AbstractModal.BeginModalDialog":"Börja modal dialog","Terra.AbstractModal.EndModalDialog":"Avsluta modal dialog","Terra.actionHeader.back":"Tillbaka","Terra.actionHeader.close":"Stäng","Terra.actionHeader.maximize":"Maximera","Terra.actionHeader.minimize":"Minimera","Terra.actionHeader.next":"Nästa","Terra.actionHeader.previous":"Föregående","Terra.ajax.error":"Innehållet lästes inte in.","Terra.applicationNavigation.drawerMenu.navigation":"Navigeringsobjekt","Terra.applicationNavigation.drawerMenu.utilities":"Verktygsobjekt","Terra.applicationNavigation.extensions.rollupButtonDescription":"Additional Tools","Terra.applicationNavigation.extensions.rollupMenuHeaderTitle":"Additional Tools","Terra.applicationNavigation.header.menuButtonTitle":"Meny","Terra.applicationNavigation.header.skipToContentTitle":"Gå till Innehåll","Terra.applicationNavigation.header.utilityButtonTitleNoUser":"Alternativ","Terra.applicationNavigation.header.utilityButtonTitleUser":"Användarinställningar","Terra.applicationNavigation.notifications.new":"Nytt","Terra.applicationNavigation.tabs.rollupButtonDescription":"Fler navigeringslänkar","Terra.applicationNavigation.tabs.rollupButtonTitle":"Mer","Terra.applicationNavigation.tabs.rollupMenuHeaderTitle":"Fler navigeringslänkar","Terra.applicationNavigation.utilityMenu.headerTitle":"Verktyg","Terra.applicationNavigation.utilityMenu.help":"Hjälp","Terra.applicationNavigation.utilityMenu.logout":"Utloggning","Terra.applicationNavigation.utilityMenu.settings":"Inställningar","Terra.data-grid.navigate":"Gå till datarutnät","Terra.data-grid.row-selection-template":"Välj: {row-description}","Terra.datePicker.calendarInstructions":"Använd piltangenterna för att ändra urval. Tryck Enter för att välja ett datum. Tryck Escape för att stänga Datumväljaren.","Terra.datePicker.closeCalendar":"Stäng","Terra.datePicker.date":"Datum","Terra.datePicker.dateFormat":"DD/MM/ÅÅÅÅ","Terra.datePicker.disabled":"Inaktiverad","Terra.datePicker.monthLabel":"Månad","Terra.datePicker.nextMonth":"Nästa månad","Terra.datePicker.openCalendar":"Öppna kalender","Terra.datePicker.previousMonth":"Föregående månad","Terra.datePicker.today":"I dag","Terra.datePicker.yearLabel":"År","Terra.devSite.themed.help":"Hjälp","Terra.form.field.optional":"(valfri)","Terra.form.select.add":'Lägg till "{text}"',"Terra.form.select.ariaLabel":"Sök","Terra.form.select.clearSelect":"Ta bort markering","Terra.form.select.defaultDisplay":"- Välj -","Terra.form.select.defaultUsageGuidance":"Använd upp- och nedpilarna för att navigera mellan alternativen. Tryck på Enter för att väklja ett alternativ.","Terra.form.select.dimmed":"Inaktiverad.","Terra.form.select.disabled":"Inaktiverad.","Terra.form.select.listOfTotalOptions":"Lista med {total} alternativ.","Terra.form.select.maxSelectionHelp":"Begränsa {text} antal poster.","Terra.form.select.maxSelectionOption":"Max antal poster {text} är valda","Terra.form.select.menu":"Meny","Terra.form.select.mobileButtonUsageGuidance":"Tryck för att navigera till alternativen.","Terra.form.select.mobileUsageGuidance":"Bläddra åt höger för att navigera till alternativen.","Terra.form.select.multiSelectUsageGuidance":"Ange text eller använd upp- och nedpilarna för att navigera genom alternativen. Tryck på Enter för att markera eller avmarkera ett alternativ.","Terra.form.select.noResults":'Inga matchande resultat för "{text}"',"Terra.form.select.option":"Alternativ","Terra.form.select.searchUsageGuidance":"Ange text eller använd upp- och nedpilarna för att navigera genom alternativen. Tryck på Enter för att välja ett alternativ.","Terra.form.select.selectCleared":"Välj omarkerat värde","Terra.form.select.selected":"Vald.","Terra.form.select.selectedText":"{text} vald.","Terra.form.select.unselected":"Omarkerad.","Terra.form.select.unselectedText":"{text} avmarkerad.","Terra.icon.IconConsultInstructionsForUse.title":"Ikon e-Bruksanvisning","Terra.InfiniteList.loading":"Läser in ...","Terra.menu.back":"Tillbaka","Terra.menu.close":"Stäng","Terra.notification.dialog.alert":"Avisering","Terra.notification.dialog.error":"Fel","Terra.notification.dialog.info":"Information","Terra.notification.dialog.success":"Klar","Terra.notification.dialog.warning":"Varning","Terra.onsetPicker.age":"Ålder","Terra.onsetPicker.ageLabel":"Ange ålder","Terra.onsetPicker.agePrecision":"Åldersprecision","Terra.onsetPicker.agePrecisionLabel":"Välj åldersprecision","Terra.onsetPicker.agePrecisionMonth":"Månader","Terra.onsetPicker.agePrecisionWeek":"Veckor","Terra.onsetPicker.agePrecisionYear":"År","Terra.onsetPicker.april":"april","Terra.onsetPicker.august":"augusti","Terra.onsetPicker.date":"Datum","Terra.onsetPicker.dateLabel":"Välj datum","Terra.onsetPicker.december":"december","Terra.onsetPicker.february":"februari","Terra.onsetPicker.granularity":"Granularitet","Terra.onsetPicker.granularityLabel":"Välj datumgranularitet","Terra.onsetPicker.january":"januari","Terra.onsetPicker.july":"juli","Terra.onsetPicker.june":"juni","Terra.onsetPicker.march":"mars","Terra.onsetPicker.may":"maj","Terra.onsetPicker.month":"Månad","Terra.onsetPicker.monthLabel":"Välj månad","Terra.onsetPicker.november":"november","Terra.onsetPicker.october":"oktober","Terra.onsetPicker.precision":"Precision","Terra.onsetPicker.precisionAbout":"Handla om","Terra.onsetPicker.precisionAfter":"Efter","Terra.onsetPicker.precisionBefore":"Innan","Terra.onsetPicker.precisionLabel":"Välj datumprecision","Terra.onsetPicker.precisionOnAt":"På/På","Terra.onsetPicker.precisionUnknown":"Okänd","Terra.onsetPicker.september":"september","Terra.onsetPicker.year":"År","Terra.onsetPicker.yearLabel":"Välj år","Terra.Overlay.loading":"Läser in ...","Terra.popup.header.close":"Stäng","Terra.searchField.clear":"Rensa","Terra.searchField.search":"Sök","Terra.searchField.submit-search":"Sök","Terra.status-view.error":"Fel","Terra.status-view.no-data":"Inga resultat","Terra.status-view.no-matching-results":"Inga resultat matchar sökvillkoren","Terra.status-view.not-authorized":"Behörighet saknas"}},1319:function(e,r,a){e.exports=function(){"use strict";return[{locale:"sv",pluralRuleFunction:function(e,r){var a=String(e).split("."),t=!a[1],n=Number(a[0])==e,i=n&&a[0].slice(-1),o=n&&a[0].slice(-2);return r?1!=i&&2!=i||11==o||12==o?"other":"one":1==e&&t?"one":"other"},fields:{year:{displayName:"år",relative:{0:"i år",1:"nästa år","-1":"i fjol"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"för {0} år sedan",other:"för {0} år sedan"}}},"year-short":{displayName:"år",relative:{0:"i år",1:"nästa år","-1":"i fjol"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"för {0} år sen",other:"för {0} år sen"}}},month:{displayName:"månad",relative:{0:"denna månad",1:"nästa månad","-1":"förra månaden"},relativeTime:{future:{one:"om {0} månad",other:"om {0} månader"},past:{one:"för {0} månad sedan",other:"för {0} månader sedan"}}},"month-short":{displayName:"m",relative:{0:"denna mån.",1:"nästa mån.","-1":"förra mån."},relativeTime:{future:{one:"om {0} mån.",other:"om {0} mån."},past:{one:"för {0} mån. sen",other:"för {0} mån. sen"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i övermorgon","-2":"i förrgår","-1":"i går"},relativeTime:{future:{one:"om {0} dag",other:"om {0} dagar"},past:{one:"för {0} dag sedan",other:"för {0} dagar sedan"}}},"day-short":{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i övermorgon","-2":"i förrgår","-1":"i går"},relativeTime:{future:{one:"om {0} d",other:"om {0} d"},past:{one:"för {0} d sedan",other:"för {0} d sedan"}}},hour:{displayName:"timme",relative:{0:"denna timme"},relativeTime:{future:{one:"om {0} timme",other:"om {0} timmar"},past:{one:"för {0} timme sedan",other:"för {0} timmar sedan"}}},"hour-short":{displayName:"tim",relative:{0:"denna timme"},relativeTime:{future:{one:"om {0} tim",other:"om {0} tim"},past:{one:"för {0} tim sedan",other:"för {0} tim sedan"}}},minute:{displayName:"minut",relative:{0:"denna minut"},relativeTime:{future:{one:"om {0} minut",other:"om {0} minuter"},past:{one:"för {0} minut sedan",other:"för {0} minuter sedan"}}},"minute-short":{displayName:"min",relative:{0:"denna minut"},relativeTime:{future:{one:"om {0} min",other:"om {0} min"},past:{one:"för {0} min sen",other:"för {0} min sen"}}},second:{displayName:"sekund",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"för {0} sekund sedan",other:"för {0} sekunder sedan"}}},"second-short":{displayName:"sek",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sek",other:"om {0} sek"},past:{one:"för {0} s sen",other:"för {0} s sen"}}}}},{locale:"sv-AX",parentLocale:"sv"},{locale:"sv-FI",parentLocale:"sv"}]}()}}]);
//# sourceMappingURL=sv-SE-translations-6ac0e12f57a986130111.js.map