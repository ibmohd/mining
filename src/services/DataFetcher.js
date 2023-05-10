import { slugify,unslugify } from '../utilities/slugify'
import { supabase } from './Supabase'

class DataFetcher {


    fetchProduct = async (name,category) => {
        const {data} = await supabase.from("products").select("*").eq("name",unslugify(category))
        return data[0].products.find((item) => slugify(item.name) === name ? item:null)
    }

    fetchCategory = async (category) => {
        const {data} = await supabase.from("products").select("*").eq("name",unslugify(category))
        return data.find((item) => slugify(item.name) === category ? item:null).products
    }

    fetchAllProducts = async () => {
        const {data} = await supabase.from("products").select()
        return data.map((item) => 
        ({
            name:item.name,
            image:item.image,
            summary:item.summary,
        })
        )
    }

    fetchService = async (name) => {
        const {data} = await supabase.from("services").select("*").eq("name",`${unslugify(name)}`)
        return data[0]
    }

    fetchAllServices = async () => {
        const {data} = await supabase.from("services").select()
        return data.map((item) => 
        ({
            name:item.name,
            image:item.image,
            summary:item.summary,
        })
        )
    }


}

export default new DataFetcher()