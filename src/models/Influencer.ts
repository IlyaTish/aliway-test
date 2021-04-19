export default class Influencer {
  id?: string | null;             // ID инфлюенсера
  name: string;                   // Ник инфлюенсера
  fullName: string | null;        // Имя инфлюенсера
  profileUrl: string;             // Ссылка на профиль инфлюенсера
  avatarUrl: string;              // Ссылка на aватар инфлюенсера
  followers: number;              // Количество фолловеров
  er: number;                     // Рейтинг вовлеченности

  constructor (args: Influencer) {
    const {
      id = null,
      name,
      fullName,
      profileUrl,
      avatarUrl,
      followers,
      er
    } = args;
    this.id = id;
    this.name = name;
    this.fullName = fullName;
    this.profileUrl = profileUrl;
    this.avatarUrl = avatarUrl;
    this.followers = followers;
    this.er = er;
  }
}
