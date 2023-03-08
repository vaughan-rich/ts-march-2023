{
    // Planting a garden

    interface Plant {
        whenToSow: string;
        whenToHarvest: string;
        isFlower: boolean;
        isEdible: boolean;
        calories: number;
    }

    // key is dictionary type - we don't know the values of the keys, just the shape
    interface Garden { [plantName: string]: Plant }

    const garden: Garden = { 
        tomato: {
            whenToSow: 'Late spring',
            whenToHarvest: 'Mid-summer to early fall',
            isFlower: false,
            isEdible: true,
            calories: 18
        }
    };

    garden.carrot = {
        whenToSow: 'Early spring',
        whenToHarvest: 'Late summer to early fall',
        isFlower: false,
        isEdible: true,
        calories: 41
    };

    garden.sunflower = {
        whenToSow: 'Late spring',
        whenToHarvest: 'Late summer to early fall',
        isFlower: true,
        isEdible: true,
        calories: 500
    };
}