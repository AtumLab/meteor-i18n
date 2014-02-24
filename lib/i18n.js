var language = 'en'; //default
i18n = {
    translations: [],

    t: function (str) {
        var parts = str.split('.'), i, parent;
        var lang = this.config();
        if(i18n.translations[lang]){
            parent = i18n.translations[lang];
            for (i = 0; i < parts.length; i += 1) {
                if (typeof parent[parts[i]] === "undefined") {
                    return str;
                }
                parent = parent[parts[i]];
            }
            return parent;
        }
        return str; 
    },

    error: function(str){
        return this.t('error.' + str);
    },

    config: function(lang){
        if(_.isString(lang))
            language = lang;
        else
            return language;
    }
};

if(Meteor.isClient){
    Handlebars.registerHelper('i18n', function(str){
        return i18n.t(str);
    }); 
}