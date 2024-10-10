const register = async (req: any, res: any) => {
    const body = req.body;
    try {
        console.log(body);
        res.status(201).json({ message: register, data: body });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export { register };
