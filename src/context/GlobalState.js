import React, { createContext, useReducer, useEffect } from 'react';
import { assendingForPrice, descendingForPrice, filterByBadge, fetchData, errorDuringFetch } from './actions'
import reducer from './reducer';
import { element } from 'prop-types';

const loadFunctionWith = (productsData) => {
    function getDetailOfProduct(id) {
        return productsData.filter(({ products }) => products.id == id)[0];
    }
    return getDetailOfProduct;
}

var data = [
    {
        "products": {
            "id": 261,
            "name": "Laborum",
            "price": 149,
            "rate": 3.79,
            "badges": ["new"],
            "content": "Labore sequi quo ab earum. Pariatur enim voluptas tenetur voluptas. Natus architecto fuga necessitatibus aspernatur itaque eum. Aperiam rem saepe necessitatibus illum molestias repellat quos.",
            "imageUrl": "https://placeholdit.imgix.net/~text?txtsize=55&txt=183x413&w=183&h=413"
        }
    },
    {
        "products": {
            "id": 262,
            "name": "Incidunt",
            "price": 270,
            "rate": 3.08,
            "badges": ["new", "discount"],
            "content": "Labore neque ullam quo perferendis. Veritatis totam corrupti dignissimos placeat cum ut natus. Est quibusdam possimus architecto cupiditate velit fugiat recusandae. Recusandae repellat ipsam exercitationem voluptates autem itaque. Ipsa perspiciatis debitis illo reprehenderit veritatis.",
            "imageUrl": "https://placeholdit.imgix.net/~text?txtsize=55&txt=361x863&w=361&h=863"
        }
    },
    {
        "products": {
            "id": 263,
            "name": "Sunt",
            "price": 152,
            "rate": 0.74,
            "badges": ["new", "discount"],
            "content": "Quidem quaerat quae nostrum voluptates. Natus ipsum repellat qui quis voluptate sit aspernatur nam. Error accusantium alias sequi. Aspernatur animi repellendus nisi magnam.",
            "imageUrl": "http://www.lorempixel.com/126/191"
        }
    },
    {
        "products": {
            "id": 264,
            "name": "Soluta",
            "price": 193,
            "rate": 4.04,
            "badges": ["new", "discount"],
            "content": "Dolorem esse dolore explicabo. Minima aspernatur molestiae culpa iste maiores eaque aliquid. Nulla quod consequatur vero explicabo velit voluptatibus dignissimos.",
            "imageUrl": "https://dummyimage.com/359x257"
        }
    },
    {
        "products": {
            "id": 265,
            "name": "Tenetur",
            "price": 130,
            "rate": 2.86,
            "badges": ["new"],
            "content": "Corporis accusantium reprehenderit incidunt veritatis accusamus similique. Ipsam ipsam nam excepturi voluptatibus eveniet. Quibusdam minus quisquam a praesentium. Minima rem perspiciatis tempora praesentium.",
            "imageUrl": "http://www.lorempixel.com/723/776"
        }
    },
    {
        "products": {
            "id": 266,
            "name": "Iure",
            "price": 278,
            "rate": 4.18,
            "badges": ["new", "discount"],
            "content": "Totam fuga at quis vel blanditiis voluptatem suscipit. Ratione voluptatibus deleniti totam aspernatur consequatur nihil enim. Deserunt eum enim architecto in animi sapiente nobis. Error enim exercitationem doloribus fugit neque.",
            "imageUrl": "https://dummyimage.com/1007x329"
        }
    },
    {
        "products": {
            "id": 267,
            "name": "Asperiores",
            "price": 272,
            "rate": 0.25,
            "badges": ["new", "discount"],
            "content": "Alias aut laborum esse. Vitae repellendus deserunt doloremque eaque. Architecto repudiandae similique officiis repellendus adipisci nihil aliquam.",
            "imageUrl": "http://www.lorempixel.com/905/770"
        }
    },
    {
        "products": {
            "id": 268,
            "name": "Et",
            "price": 222,
            "content": "Alias dolor cupiditate esse aliquam amet. Corrupti nostrum perspiciatis voluptatem autem officia. Enim molestiae similique recusandae iure quod odio. Qui quasi cupiditate recusandae sit.",
            "badges": ["new", "discount"],
            "imageUrl": "http://www.lorempixel.com/905/770"
        }
    },
    {
        "products": {
            "id": 269,
            "name": "Deleniti",
            "price": 166,
            "rate": 0.62,
            "badges": ["new", "discount"],
            "content": "Inventore praesentium dignissimos debitis cumque. Repellat alias voluptatem numquam. Quibusdam consequuntur ipsa tempore labore earum id saepe animi.",
            "imageUrl": "https://dummyimage.com/480x442"
        }
    },
    {
        "products": {
            "id": 270,
            "name": "Vel",
            "price": 127,
            "rate": 0.37,
            "badges": ["new"],
            "content": "Recusandae harum hic magni harum architecto minima ullam. Molestiae debitis aut soluta optio. Dolorem iure cumque aspernatur quasi cupiditate est. Harum temporibus similique deleniti tempore culpa qui repellat sed.",
            "imageUrl": "https://placeholdit.imgix.net/~text?txtsize=55&txt=977x381&w=977&h=381"
        }
    },
    {
        "products": {
            "id": 271,
            "name": "Odio",
            "price": 241,
            "rate": 1.84,
            "badges": ["discount"],
            "content": "Deleniti quisquam esse itaque id. Dicta esse corrupti incidunt quos quasi inventore velit. Aliquam occaecati labore illum voluptatibus repellat.",
            "imageUrl": "https://dummyimage.com/216x357"
        }
    },
    {
        "products": {
            "id": 272,
            "name": "Quia",
            "price": 142,
            "rate": 1.32,
            "badges": ["new"],
            "content": "Magni adipisci fuga reiciendis quas dignissimos. Hic distinctio deserunt distinctio ab dignissimos vero voluptate.",
            "imageUrl": "https://placeholdit.imgix.net/~text?txtsize=55&txt=664x425&w=664&h=425"
        }
    },
    {
        "products": {
            "id": 273,
            "name": "Aut",
            "price": 263,
            "rate": 1.77,
            "content": "Nobis voluptate excepturi odit animi. Voluptates itaque enim iure voluptatibus libero fugit. Iusto tempora maiores aperiam quisquam.",
            "badges": ["discount"]
        }
    },
    {
        "products": {
            "id": 274,
            "name": "Vero",
            "price": 145,
            "badges": ["new"],
            "content": "Officiis magnam tenetur odio nemo. Veritatis aspernatur dolor veritatis molestias quasi officia pariatur ducimus. Sint dolor officia iusto. Non vel explicabo iure eaque delectus.",
            "imageUrl": "http://www.lorempixel.com/461/675"
        }
    },
    {
        "products": {
            "id": 275,
            "name": "Iure",
            "price": 210,
            "rate": 0.58,
            "badges": ["discount"],
            "content": "In repudiandae aspernatur sint adipisci non. Iure officiis itaque officia. Saepe ad placeat veniam voluptatem.",
            "imageUrl": "https://placeholdit.imgix.net/~text?txtsize=55&txt=1012x39&w=1012&h=39"
        }
    },
    {
        "products": {
            "id": 276,
            "name": "Vel",
            "price": 228,
            "rate": 1.04,
            "badges": ["discount"],
            "content": "Amet nesciunt id eligendi tempora sed commodi. Tempore fuga quae atque eum laboriosam quas esse. Ipsam aperiam incidunt in cumque.",
            "imageUrl": "https://dummyimage.com/159x241"
        }
    },
    {
        "products": {
            "id": 277,
            "name": "Aliquid",
            "price": 245,
            "rate": 3.58,
            "badges": ["discount"],
            "content": "Nobis nam cum ut quae. Sequi eaque voluptatum molestias deserunt. Quos similique cupiditate quod dolore necessitatibus voluptate.",
            "imageUrl": "https://dummyimage.com/75x496"
        }
    },
    {
        "products": {
            "id": 278,
            "name": "Accusantium",
            "price": 248,
            "rate": 1.77,
            "badges": ["discount"],
            "content": "Unde accusamus laborum repellat tenetur delectus magni aliquam temporibus. Exercitationem sint voluptate sequi sit. Saepe a id exercitationem. Consequatur cumque earum impedit voluptas ipsum dolorum provident iure.",
            "imageUrl": "http://www.lorempixel.com/1019/400"
        }
    },
    {
        "products": {
            "id": 279,
            "name": "Exercitationem",
            "price": 267,
            "rate": 4.74,
            "badges": ["discount"],
            "content": "Optio a repellat nisi porro minima beatae officiis. Incidunt veniam aut corporis ipsam assumenda. Aliquam magnam vitae inventore eum. Quos ipsa nobis aliquid cumque tenetur quas quos et.",
            "imageUrl": "http://www.lorempixel.com/953/759"
        }
    },
    {
        "products": {
            "id": 280,
            "name": "Quaerat",
            "price": 131,
            "rate": 1.18,
            "badges": ["new"],
            "content": "Doloribus quibusdam alias numquam hic ad quam. Reiciendis dignissimos voluptatum veniam nihil deleniti natus veritatis. Vitae tenetur blanditiis minus molestias quas accusantium. Ducimus illo dolor molestias recusandae aliquam dolorem voluptatum.",
            "imageUrl": "https://placeholdit.imgix.net/~text?txtsize=55&txt=1020x397&w=1020&h=397"
        }
    },
    {
        "products": {
            "id": 281,
            "name": "Hic",
            "price": 173,
            "rate": 2.52,
            "badges": ["discount"],
            "content": "Incidunt consequatur facilis dicta ipsa facere. Commodi eius aut totam neque omnis earum alias. Facere velit illo pariatur ad dolor voluptas quam. Similique eum ut minima quo.",
            "imageUrl": "https://dummyimage.com/947x108"
        }
    },
    {
        "products": {
            "id": 282,
            "name": "A",
            "price": 260,
            "content": "Recusandae commodi libero totam nemo consectetur aperiam blanditiis doloribus. Harum necessitatibus dolor ad explicabo. Voluptatem excepturi laudantium beatae fugiat accusantium.",
            "badges": ["new", "discount"]
        }
    },
    {
        "products": {
            "id": 283,
            "name": "Quo",
            "price": 300,
            "rate": 1.05,
            "badges": ["new", "discount"],
            "content": "Tenetur reiciendis officia iusto et corporis sapiente. Vitae porro in culpa unde. Non cumque dolor aliquam voluptates. Reiciendis consequuntur porro quibusdam neque voluptatum.",
            "imageUrl": "http://www.lorempixel.com/316/321"
        }
    },
    {
        "products": {
            "id": 284,
            "name": "Cum",
            "price": 100,
            "rate": 3.17,
            "badges": ["new"],
            "content": "In sapiente doloribus inventore doloribus voluptate architecto libero. Atque natus nesciunt necessitatibus deleniti dolorum debitis aperiam. Eius a sequi nam iste pariatur aliquam aliquid. Voluptas numquam cupiditate unde cum placeat ipsa temporibus.",
            "imageUrl": "https://dummyimage.com/398x558"
        }
    },
    {
        "products": {
            "id": 285,
            "name": "Commodi",
            "price": 242,
            "rate": 3.35,
            "badges": ["new", "discount"],
            "content": "Mollitia possimus sit eligendi esse non inventore dignissimos sed. Dignissimos recusandae velit illo nemo.",
            "imageUrl": "http://www.lorempixel.com/55/827"
        }
    },
    {
        "products": {
            "id": 286,
            "name": "Ratione",
            "price": 168,
            "rate": 2.94,
            "badges": ["new", "discount"],
            "content": "Unde non molestiae vel tempora. Id mollitia similique quidem magnam officiis a nemo.",
            "imageUrl": "http://www.lorempixel.com/804/486"
        }
    },
    {
        "products": {
            "id": 287,
            "name": "Pariatur",
            "price": 237,
            "rate": 1.68,
            "badges": ["new", "discount"],
            "content": "Atque hic quos iste voluptate. Necessitatibus quos velit atque eos fuga repudiandae. Repellendus id dicta veniam quasi quia veniam harum.",
            "imageUrl": "http://www.lorempixel.com/261/923"
        }
    },
    {
        "products": {
            "id": 288,
            "name": "Pariatur",
            "price": 252,
            "rate": 1.79,
            "badges": ["new", "discount"],
            "content": "Porro deleniti iure vel quae mollitia unde. Illum nulla laudantium rerum. Ducimus quod enim culpa esse quidem necessitatibus at. Eos amet reiciendis quos et voluptatibus est iure. Et tempore nam maiores dolores quae laborum ipsa.",
            "imageUrl": "https://placeholdit.imgix.net/~text?txtsize=55&txt=378x940&w=378&h=940"
        }
    },
    {
        "products": {
            "id": 289,
            "name": "Voluptas",
            "price": 259,
            "rate": 2.46,
            "badges": ["new", "discount"],
            "content": "Vero enim veniam velit ipsum inventore. Voluptates nobis tempore nisi sit tempore odio. Soluta eius enim nisi fugiat molestiae itaque dolorem.",
            "imageUrl": "https://dummyimage.com/72x712"
        }
    },
    {
        "products": {
            "id": 290,
            "name": "Rem",
            "price": 287,
            "rate": 1.94,
            "badges": ["new", "discount"],
            "content": "Modi ab recusandae impedit vero officiis. Optio facilis incidunt quas itaque nostrum voluptates voluptatibus. Sunt maiores cupiditate non quas velit consectetur ullam maiores. Incidunt sequi incidunt quas.",
            "imageUrl": "https://placeholdit.imgix.net/~text?txtsize=55&txt=896x635&w=896&h=635"
        }
    }
];
const initialState = {
    productsData: data,
    filteredProducts: [],
    loading: false,
    error: ''
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    GlobalProvider.propTypes = {
        children: element
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    //GETTING DATA FROM API
    // useEffect(() => {
    //     fetch('https://cimri-products.free.beeceptor.com/cimri/api/products')
    //         .then(response => response.json())
    //         .then(data => dispatch(fetchData(data)))
    //         .catch(error => dispatch(errorDuringFetch(error)))
    // }, [])

    return (
        <GlobalContext.Provider value={{
            productsData: state.productsData,
            filteredProducts: state.filteredProducts,
            loading: state.loading,
            assendingForPrice: () => dispatch(assendingForPrice(state)),
            descendingForPrice: () => dispatch(descendingForPrice(state)),
            filterByBadge: (data) => dispatch(filterByBadge(data)),
            getDetailOfProduct: loadFunctionWith(state.productsData)
        }}>
            {children}
        </GlobalContext.Provider>
    )

}