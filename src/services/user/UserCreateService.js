const UserCreateService = async (request, DataMOdel) => {
    try {
        let PostBody = Request.body;
        let data = await DaraModel.create(PostBody);
        return { status: "success", data: data }
    }
    catch (error) {
        return { status: "error", data: error.toString() }
    }
}

module.exports = UserCreateService;