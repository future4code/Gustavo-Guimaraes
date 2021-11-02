import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

/* export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      let title = req.params.name
      
      
      const result = await connection("aula49_recipes").where("title", "like", `%${title}%`)




      const recipes = result.map(toRecipe)



      res.status(200).send(recipes)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
} */
export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      let title = req.query.title
      let sort = req.query.sort as string
      let order = req.query.order as string

      if(order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC"){
         order = "ASC";
      }
      

      if(title === ""){
         throw new Error("O valor de 'title' não foi informado.");
      }


      if(sort !== "title" && sort !== "created_at"){
         sort = "title";
      }

      const result = await connection("aula49_recipes").where("title", "like", `%${title}%`).orderBy(sort, order)

      const recipes = result.map(toRecipe)



      res.status(200).send(recipes)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}