const { Guild } = require('@prosperitybot/database');

module.exports = {
  get: async (i) => {
    if (i.client.guildTranslations.get(i.guildId) === null) {
      const guild = await Guild.findByPk(i.guildId);
      console.log(guild.locale);
      i.client.guildTranslations.set(i.guildId, guild.locale);
    }
    const locale = i.client.guildTranslations.get(i.guildId);
    console.log(locale);
    console.log(i.client.translations.get(locale));
    return i.client.translations.get(locale);
  },
  format: (str, format) => {
    let formatted = str;
    format.forEach((f) => {
      formatted = formatted.replaceAll(`%${f[0]}%`, f[1]);
    });
    return formatted;
  },
};
