export interface IContent {
    image: string;
    title: string;
    description: string;
    name: string;
}


export const cards: IContent[] = [
    {
        image: 'https://media.istockphoto.com/id/538335769/photo/donut-with-sprinkles-isolated.jpg?s=612x612&w=0&k=20&c=rCA_fEe8H3qwXT20aYfRJTrMHpSB8deFuiKK0ygQLwg=',
        title: 'Pink Donut',
        description: 'Taste our new pink donut',
        name: 'pink'
    },
    {
        image: 'https://www.iscream-shop.com/web/image/product.image/1024/image_1024/Blue%20and%20Pink%20Donut%20Scented%20Microbead%20Pillow?unique=f1d68b4',
        title: 'Blue donut',
        description: 'Taste our new blue donut',
        name: 'blue'
    },
    {
        image: 'https://s3.envato.com/files/264453600/DSC_7080.jpg',
        title: 'Yellow donut',
        description: 'Taste our new yellow donut',
        name: 'yellow'
    }
]
