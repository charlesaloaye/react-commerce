import Product from "../components/shared/Product"

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">

                    <Product
                        title='iphone 12'
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s'
                        rating={3}
                        price={50000}
                        location='Lagos, Nigeria'
                    />
                </div>


                <div className="col-md-3">
                    <Product
                        title='iphone 12'
                        image='https://www.shutterstock.com/image-photo/belize-tropical-paradise-central-america-260nw-1046117977.jpg'
                        rating={5}
                        price={60000}
                        location='Delta, Nigeria'
                    />
                </div>


                <div className="col-md-3">
                    <Product
                        title='iphone 12'
                        image='https://t3.ftcdn.net/jpg/02/00/91/10/360_F_200911053_4ygtfQ75mb72sGYeHDfyl2JF4aiTtT0n.jpg'
                        rating={2}
                        price={4000}
                        location='Abuja, Nigeria'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
