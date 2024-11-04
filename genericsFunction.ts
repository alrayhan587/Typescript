{

    //


    //Generic Array concept,
    const createArray = (params: string): string[] => {
        return [params]
    }

    const createArrayWithGeneric = <T>(params: T): T[] => {
        return [params]
    }

    const result1 = createArray('Bangladesh');
    const resultGeneric = createArrayWithGeneric<boolean>(true);

    type User = { id: number; name: string }
    const resultwithObj = createArrayWithGeneric<User>({ id: 2, name: 'rayhan' })

    //
}