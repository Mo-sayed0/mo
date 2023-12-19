/*
Created by: Ahmed Soliman
Ahmed //@/// 6h.agency
*/
window.addEventListener('load', function(){

    // obtain plugin
    var cc = initCookieConsent();

    // run plugin with your configuration
    cc.run({
        current_lang: 'nl',
        autoclear_cookies: true,                   // default: false
        page_scripts: true,                        // default: false

        // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
        // delay: 0,                               // default: 0
        // auto_language: '',                      // default: null; could also be 'browser' or 'document'
        // autorun: true,                          // default: true
        // force_consent: false,                   // default: false
        // hide_from_bots: false,                  // default: false
        // remove_cookie_tables: false             // default: false
        // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
        // cookie_expiration: 182,                 // default: 182 (days)
        // cookie_necessary_only_expiration: 182   // default: disabled
        // cookie_domain: location.hostname,       // default: current domain
        // cookie_path: '/',                       // default: root
        // cookie_same_site: 'Lax',                // default: 'Lax'
        // use_rfc_cookie: false,                  // default: false
        // revision: 0,                            // default: 0

        onFirstAction: function(user_preferences, cookie){
            // callback triggered only once on the first accept/reject action
        },

        onAccept: function (cookie) {
            // callback triggered on the first accept/reject action, and after each page load
        },

        onChange: function (cookie, changed_categories) {
            // callback triggered when user changes preferences after consent has already been given
        },

        languages: {
            'nl': {
                consent_modal: {
                    title: 'Wij gebruiken cookies!',
                    description: 'Hallo, deze website gebruikt essentiële cookies om de goede werking ervan te garanderen en tracking cookies om te begrijpen hoe je met de website omgaat. Deze laatste worden alleen geplaatst na toestemming.  <button type="button" data-cc="c-settings" class="cc-link">Laat mij kiezen</button>',
                    primary_btn: {
                        text: 'Alles accepteren',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Alles verwerpen',
                        role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'Cookie-voorkeuren',
                    save_settings_btn: 'Bewaar zittingen',
                    accept_all_btn: 'Alles accepteren',
                    reject_all_btn: 'Alles weigeren',
                    close_btn_label: 'Close',
                    cookie_table_headers: [
                        {col1: 'Naam'},
                        {col2: 'Domein'},
                        {col3: 'Vervaldatum'},
                        {col4: 'Beschrijving'}
                    ],
                    blocks: [
                        {
                            title: 'Cookiegebruik ðŸ“¢',
                            description: 'Ik gebruik cookies om de basisfunctionaliteiten van de website te garanderen en je online ervaring te verbeteren. Je kunt voor elke categorie kiezen voor opt-in/ opt-out wanneer je maar wilt. Lees het volledige privacybeleid voor meer informatie over cookies en andere gevoelige gegevens. <a href="#" class="cc-link">privacy policy</a>.'
                        }, {
                            title: 'Strikt noodzakelijke cookies',
                            description: 'Deze cookies zijn essentieel voor het goed functioneren van mijn website. Zonder deze cookies zou de website niet naar behoren werken',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                            }
                        }, {
                            title: 'Prestatie- en analysecookies',
                            description: 'Met deze cookies kan de website de keuzes onthouden die u in het verleden hebt gemaakt',
                            toggle: {
                                value: 'analytics',     // your cookie category
                                enabled: false,
                                readonly: false
                            },
                            cookie_table: [             // list of all expected cookies
                                {
                                    col1: '^_ga',       // match all cookies starting with "_ga"
                                    col2: 'google.com',
                                    col3: '2 years',
                                    col4: 'description ...',
                                    is_regex: true
                                },
                                {
                                    col1: '_gid',
                                    col2: 'google.com',
                                    col3: '1 day',
                                    col4: 'description ...',
                                }
                            ]
                        }, {
                            title: 'Advertentie en targeting cookies',
                            description: "Deze cookies verzamelen informatie over hoe je de website gebruikt, welke pagina's je hebt bezocht en op welke links je hebt geklikt. Alle gegevens worden geanonimiseerd en kunnen niet worden gebruikt om u te identificeren.",
                            toggle: {
                                value: 'targeting',
                                enabled: false,
                                readonly: false
                            }
                        }, {
                            title: 'Meer informatie',
                            description: 'Als je vragen hebt over ons cookiebeleid en je keuzes, Alsjeblieft <a class="cc-link" href="#yourcontactpage">contact met ons</a>.',
                        }
                    ]
                }
            }
        }
    });
});
