import {ObjectId,} from 'mongodb';
import {getCollection} from "@/utils/functions";
import { sendMethodNotAllowed, sendOk } from '@/utils/apiMethods';

const COLLECTION_NAME = 'movies';

const getMovies = async () => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.find({}).toArray();
}

const getMovie = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.findOne({ _id: ObjectId.createFromHexString(id) });
}

const createMovie = async (data) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.insertOne(data);
}

const updateMovie = async (data) => {
    const collection = await getCollection(COLLECTION_NAME);
    const id = data._id;
    delete data._id;
    return collection.updateOne({ _id: new ObjectId(id)}, { $set: data });
}

const deleteMovie = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.deleteOne({ _id: ObjectId.createFromHexString(id) });
}

export default async function handler(req, res) {
    const isAllowedMethod = req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';
    if (!isAllowedMethod) {
        return sendMethodNotAllowed(res, 'Method Not Allowed');
    }

    if (req.method === 'GET' && req.query.id) {
        const movie = await getMovie(req.query.id);
        return sendOk(res, movie);
    }

    if (req.method === 'GET') {
        const movies = await getMovies();
        return sendOk(res, movies);
    }

    if (req.method === 'POST') {
        const movie = await createMovie(req.body);
        return sendOk(res, movie);
    }

    if (req.method === 'PUT') {
        const movie = await updateMovie(req.body);
        return sendOk(res, movie);
    }

    if (req.method === 'DELETE') {
        const movie = await deleteMovie(req.query.id);
        return sendOk(res, movie);
    }
   }