const UserDetailsService = async (request, DataMOdel) => {
    try {
        let data = await DataMOdel.aggregate([{ $match: { email: Request.headers['email'] } }])
        return { status: "success", data: data }
    }
    catch (error) {
        return { status: "error", data: error.toString() }
    }
}

module.exports = UserDetailsService;