/*

Intro:

    Our frontend application needs to fetch some data from an api.

    The server API format was decided to be the following:

    In case of success: { status: 'success', data: RESPONSE_DATA }
    In case of error: { status: 'error', error: ERROR_MESSAGE }

    The types UsersApiResponse and ProductApiResponse were already
    created. But, we figured out that the number of types needed to 
    be created is too big if new data types were required.

Exercise:

    1. Remove the UsersApiResponse and ProductsApiResponse types and use the generic ApiResponse type to specify a generic API response format for each function. 
    2. Constraint the generic type to be a subtype of Entity.
    3. (Bonus) Create a generic fetchMock() function to minimize 
       the code of the fetchProducts() and fetchUsers() functions.

*/
{
    interface Entity {
        id: string;
    }

    interface User extends Entity {
        name: string;
    }

    interface Product extends Entity {
        description: string;
    }

    const mockUsers: User[] = [
        { id: "1", name: 'Santa Claus' },
        { id: "2", name: 'Jon Doe' }
    ];
    const mockProducts: Product[] = [
        { id: "1", description: 'Product 1' },
        { id: "2", description: 'Product 2' }
    ];

    type APIResponse<T extends Entity> = 
        {
            status: 'success';
            data: T[];
        } |
        {
            status: 'error';
            data: string;
        };

    async function fetchMock<T extends Entity>(mockData: T[]): Promise<APIResponse<T>> {
        return new Promise(res => res({
            status: 'success',
            data: mockData
        }));
    }

    async function fetchProducts(): Promise<APIResponse<Product>> {
        return fetchMock(mockProducts);
        // return new Promise(res => res({
        //     status: 'success',
        //     data: mockProducts
        // }));
    }
    async function fetchUsers(): Promise<APIResponse<User>> {
        return fetchMock(mockUsers);
        // return new Promise(res => res({
        //     status: 'success',
        //     data: mockUsers
        // }));
    }

    async function startApp() {
        const usersResponse = await fetchUsers();
        const productsResponse = await fetchProducts();
        
        if (usersResponse.status === 'error' || productsResponse.status === 'error') {
            throw new Error('An error occured while fetching some data.')
        }   

        console.log(`Successfully fetched ${usersResponse.data.length} users.`);
        console.log(`Successfully fetched ${productsResponse.data.length} products.`);

    }

    startApp();
}