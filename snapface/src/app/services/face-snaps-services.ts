import { Injectable } from "@angular/core";
import { FaceSnap } from '../models/face-snap-models';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Nike Air Max 1 Crepe Hemp 2022',
            description: '179.99€ la Crepe Hemp. Le prix du coloris de l’âge d’or de la Nike Air Max 1 fait grincer des dents. Les amoureux du modèle qui fête son 35ème anniversaire salue son retour. Cependant, cet histoire de tarif en froisse plus d’un. Les dernières éditions limitées (Kasina, Tour Yellow et Patta) ont un tarif inférieur. A côté, le fait que la rétro ne soit pas fidèle à 100% à la version de 2004 fait peu de vague. Comment le justifier ? Les matériaux premium ! C’est la seule explication plausible. La toile de jute tressée beige, le daim marron et le cuir vieilli vert pastel, ça coûte cher à produire. De toutes les façons, il va falloir vous préparer car avec l’inflation, les hausses vont se généraliser.La Nike Air Max 1 PRM QS Crepe Hemp sera disponible le jeudi 15 septembre',
            createdDate: new Date(),
            imageUrl: 'https://www.sneakers-actus.fr/wp-content/uploads/2022/09/Nike-Air-Max-1-marron-moyen-mousse-menthe-5.jpg',
            snaps: 200,
            location: 'Angers'
        },
        {
            id: 2,
            title: 'New Balance 990v1 x Carhartt WIP',
            description: 'C’est la première fois que Carhartt Work in Progress collabore avec la marque fondée par William J Riley. A la vue de la Sculpture Center, une New Balance 990v1 qui s’inspire des salles de sport de quartier, on se demande pourquoi avoir attendu si longtemps. Je vous conseille de sortir votre plus beau selvedge denim afin de faire honneur à la chaussure made in USA. Le daim duveteux bleu foncé, le mesh premium gris et les lacets en coton blanc, épousent parfaitement un jeans bien brut. Les détails sont soignés à l’image de la semelle Vibram qui procure une accroche renforcée. La boîte customisée n’est pas mal non plus. Vous pourrez la porter en alternance avec la 990 v1 Marblehead de Teddy Santis. Encore faudra t-il remporter la raffle. La NB M990CH1 x Carhartt WIP Dark Navy Steel Gray sera disponible au prix de 230€ le vendredi 16 septembre',
            createdDate: new Date(),
            imageUrl: 'https://www.sneakers-actus.fr/wp-content/uploads/2022/09/New-Balance-990-V1-CarharttWIP-on-feet-couv.jpg',
            snaps: 0,
            location: 'Bordeaux'
        },
        {
            id: 3,
            title: 'Nike Dunk High Dark Beetroot',
            description: 'La marque au Swoosh peaufine sa collection automnale 2022. La Dark Beetroot Wolf Grey est l’une des 2 sorties de la semaine du classique de Peter Moore avec la Next Nature Light Curry, une exclusivité femme. Bicolore comme une UNLV du pack Be True To Your School, la Nike Dunk High Retro combine du cuir gris et bordeaux, 2 nuances appelées à être de plus en plus en vogue. Le violet appliqué sur le modèle de 1985 donne souvent de bons résultats (et pas que, les Air Jordan 1 Gilded Pendants le prouvent). Mizu l’a mise à côté d’une Patta x Nike Air Max 1 The Wave Night Maroon. La ressemblance entre 2 sneaker se relève assez amusante. La Nike Dunk High Dark Beetroot sera disponible au prix de 119.99€ le jeudi 15 septembre',
            createdDate: new Date(),
            imageUrl: 'https://www.sneakers-actus.fr/wp-content/uploads/2022/09/Nike-Dunk-Hi-grise-et-violette-3-1.jpg',
            snaps: 0
        },
        {
            id: 4,
            title: 'Union LA x Nike Cortez',
            description: 'Chris Gibbs aurait pu se limiter à la Sesame. Les gens ont dans leur immense majorité jeté leur dévolu sur cette Nike Cortez façonnée par le boss d’Union LA. Les photos on feet abondent. J’ai été obligé de les choisir. Chez la marque au Swoosh, la tendance est aux collaborations sous forme de pack réunissant plusieurs coloris. 6 Air Max 1 constituent la série The Wave de Patta ! La chaussure beige est la plus puissante et aussi la plus facile à porter. Viens ensuite la Light Smoke puis la Off Noir. La Lemon Frost est la moins présente sur les réseaux sociaux. Une 5ème sneaker frappée du logo du shop basé à Los Angeles verra t-elle le jour ? Rien n’a filtré. En cette année où la running de 1972 fête son 50ème anniversaire, les champs des possibles sont larges. Si tel devait être le cas, comptez sur nous pour mettre ce dossier à jour !',
            createdDate: new Date(),
            imageUrl: 'https://www.sneakers-actus.fr/wp-content/uploads/2022/09/Union-LA-x-Nike-Cortez-Sesame-@hellacreps-couv.jpg',
            snaps: 0
        },
        {
            id: 5,
            title: 'Air Jordan 6 Georgetown',
            description: ' La Air Jordan 6 Retro fait un clin d’oeil à une équipe de basketball universitaire contre laquelle MJ a joué. D’ailleurs, la AJ1 High 85 College Navy lancée en mars célèbre les 40 ans de sa victoire en finale face à un certain Patrick Ewing. La Magnet and College Navy pourrait bien avoir été créée dans la même optique. Sa commercialisation intervient 1 an après la Air Jordan 3 Midnight qui a remporté un relatif succès. La chaussure à base de daim gris et aux accents bleu marine évoque une AJ6 PE qui pour le coup affiche le logo de l’université dont la mascotte est un bulldog.',
            createdDate: new Date(),
            imageUrl: 'https://www.sneakers-actus.fr/wp-content/uploads/2022/09/Air-Jordan-6-grise-et-bleu-marine-on-feet.jpg',
            snaps: 0
        },
        {
            id: 6,
            title: 'Adidas Forum Low 84 LG UNC Clear Sky',
            description: 'Pour certains sneakerheads, seule la Air Jordan 1 Retro High OG est en droit de porter le surnom « UNC« . Ces derniers pourraient admettre une exception pour la basket de Jacques Chassaing. Avant de rejoindre Nike, Michael Jordan a joué en Adidas Forum 84 High.',
            createdDate: new Date(),
            imageUrl: 'https://www.sneakers-actus.fr/wp-content/uploads/2022/08/Adidas-Forum-Low-blanche-et-bleu-clair-2-768x585.jpg',
            snaps: 0
        },
    ]

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap) {
            throw new Error('FaceSnap not found');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}