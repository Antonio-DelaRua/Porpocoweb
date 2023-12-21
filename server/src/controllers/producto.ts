import { Request, Response } from 'express';
import Empleado from '../models/producto';

export const getProducts = async (req: Request , res: Response) => {
   const listProducts = await Empleado.findAll()

    res.json(listProducts);
}


export const getProduct = async (req: Request , res: Response) => {

    const { id } = req.params;
    const product = await Empleado.findByPk(id);

    if(product){ 
        res.json(product)
    } else {
        res.status(404).json({
            msg: 'no se encuentra ningun empleado con ese id '
        })
    }

  
}

export const deleteProduct = async (req: Request , res: Response) => {
    
    const { id } = req.params;
    const product = await Empleado.findByPk(id);

    if(!product){
        res.status(404).json({
            msg: 'No se encuentra empleado con ese id'
        })
    } else {
       await product.destroy();
       res.json({
        msg: 'el empleado fue eliminado '
       })
    }

   
}

export const postProduct = async (req: Request , res: Response) => {

    const { body } = req;
    try {
        await Empleado.create(body);

        res.json({
            msg: 'el empleado fue agregado'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'hah no ha dicho la palabra magica'
        })
    }
    
}

export const updateProduct = async(req: Request , res: Response) => {
    
    const { id } = req.params;
    const { body } = req;

    try {
        const product = await Empleado.findByPk(id);
        if(product){
            await product.update(body);
            res.json({
                msg: 'el empleado fue actualizado con esito'
            })
        }else {
            res.status(404).json({
                msg: ` No esiste un producto con el id ${id} ` 
            })
        }

    }catch (error){
        console.log(error);
        res.json({
            msg: 'hahaha no ha dicho la palabra magica, llame al rua'
        })
    }
    
   
   
}