{
    type User = {
    name: string;
    location?: string;
    }
    interface Customer {
        id: number | string;
        lastLoggedIn: string | null;
    }

    const user: User = {
        name: 'richard',
        location: 'london'
    };
    user.name = 'ricardo';
    user.location = 'aosta';
}
{
    // types vs interfaces

    type BirdType = {
        wings: 2;
    };

    interface BirdInterface {
        wings: 2;
    }

    const bird1: BirdType = {
        wings: 2
    };
    const bird2: BirdInterface = {
        wings: 2
    };
    // const injuredBird: BirdType = {
    //     wings: 1 // error message
    // }

    // can mix interfaces and types - ts is structural
    const bird3: BirdInterface = bird1;

    // known types can be extended with &
    type Owl = { nocturnal: true } & BirdType;
    type Robin = { nocturnal: false } & BirdType;

    interface Peacock extends BirdType {
        colourful: true;
        tasty: false;
    }
    interface Chicken extends BirdInterface {
        colourful: false;
        tasty: true;
    }

    let owl: Owl = {
        wings: 2,
        nocturnal: true
    }
    let chicken: Chicken = {
        wings: 2,
        colourful: false,
        tasty: true
    }

    //owl = chicken // error message
    //chicken = owl // interface error message is a little more clear
}

{
    interface Character {
        name: string;
        hairColour: string;
    }

    interface APIResponse {
        count: number;
        results: Character[];
    }
}