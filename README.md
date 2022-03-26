# AniData
## Getting started
` npm install anidata`

```ts
import anidata from 'anidata'

run()

async function run(){
    console.log(await anidata.anilist.character.getByName("rias"))
}
```
## Results
```
name: {
      full: 'Rias Gremory',
      first: 'Rias',
      middle: null,
      last: 'Gremory',
      userPreferred: 'Rias Gremory',
      native: 'リアス・グレモリー',
      alternative: [Array],
      alternativeSpoiler: ['Buchou (President)','Ria','Heiress of the House of Gremory','Crimson-Haired Ruin Princess','Princess of Destruction','Princess of Gremory','Devil Princess','Switch Princess',"Red Dragon Emperor's Legal Wife"]
    },
    image: {
      large: 'https://s4.anilist.co/file/anilistcdn/character/large/b50389-32Fkl98wo3ou.png',
      medium: 'https://s4.anilist.co/file/anilistcdn/character/medium/b50389-32Fkl98wo3ou.png'
    },
    dateOfBirth: { year: null, month: 4, day: 9 },
    bloodType: null,
    siteUrl: 'https://anilist.co/character/50389',
    favourites: 4391,
    description: `__Height:__ 172 cm (5'8")\n` +
      '__Rank/Role:__ Top-class devil(Pure devil)/King\n' +
      '__Power:__ Power of destruction\n' +
      '\n' +
      `A 12th grade student and the prettiest girl in the academy. Comes from the old noble of pure devils, the house of Gremory, a top-class devil who is called a genius nicknamed "Crimson Ruin Princess". Her brother is in fact one of the Yondai-Maou, Lucifer. Both of them possess the power of destruction. She revives Issei as her servant after finding him dead, killed by a fallen-angel and possessing a rare Sacred Gear. Kind and soft to her servants, becomes a totally different person when training or fighting.    ~!She begins to develop romantic feelings for Issei in Volume 2 of the light novel and moves in with him at the volume's end.  In Volume 10, he confesses that he loves her and she returns his feelings. They begin dating after that.!~`,
    gender: 'Female',
    age: '17',
    anime: { nodes: [Array] },
    manga: { nodes: [Array] }
```
 
## Additional Info

any issues report [in our github](https://github.com/OpenianDevelopment/anirequest/issues)