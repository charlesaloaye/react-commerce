import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CreditCard } from '@mui/icons-material';
import { ShoppingCart } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import LocationOn from '@mui/icons-material/LocationOn';

const Product = ({ title, price, rating, image, location, desc }) => {
    return (
        <div className="container">
            <Card className='shadow' style={{ marginTop: '15px' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {desc}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', float: 'left' }}>
                        NGN{(price).toFixed(2)}
                        <br />
                        <LocationOn fontSize='small' />{location}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'red', float: 'right' }}>

                        {Array(rating).fill()
                            .map((_, i) => {
                                return (<StarIcon fontSize="small" />)
                            })}
                    </Typography>

                </CardContent>
                <CardActions style={{ marginTop: '35px', float: 'right' }}>
                    <Button variant='outlined' size="small">To Cart <ShoppingCart fontSize='small' /></Button>
                    <Button href="/checkout" variant="contained" color="success" size='small'>

                        Buy Now <CreditCard fontSize='small' />

                    </Button>


                </CardActions>
            </Card>
        </div>
    )
}

Product.defaultProps = {
    price: 5000,
    rating: 3,
    desc: `Lizards are a widespread group of squamate reptiles, with over 6,000 species, 
    ranging across all continents except Antarctica`
}

export default Product
