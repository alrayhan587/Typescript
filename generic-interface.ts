{
    // 


    interface Developer<T> {
        name: string,
        computer: {
            brand: string,
            model: string,
            releaseYear: number,
        }
        smartWatch: T
    }

    type EminWatchecs={ brand: string; model: string }
//developer 1
    const Developer1: Developer<EminWatchecs> = {
        name: 'rayhan',
        computer: {
            brand: 'HP',
            model: 'EliteBook',
            releaseYear: 2020,
        },
        smartWatch: {
            brand: 'Emin',
            model: 'e304',
        }
    }


    type AppleWatches={
        brand: string,
        model: string,
        heartbeat: boolean,
        steptracker: boolean
    }
    //developer 2
    const Developer2: Developer<AppleWatches> = {
        name: 'rakib',
        computer: {
            brand: 'Apple',
            model: 'MacBook',
            releaseYear: 2023,
        },
        smartWatch: {
            brand: 'Appple',
            model: 'etc',
            heartbeat: true,
            steptracker: true
        }
    }














    //
}