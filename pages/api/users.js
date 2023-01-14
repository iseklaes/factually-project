import prisma from '../../lib/prisma';


export default async function handle(req, res) {
    const {firstName, lastName, email, password} = req.body;
    const result = await prisma.UserInfo.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email, 
            password: password
        },
    });

    res.json(result);

}

/*export default async (NextApiRequest, NextApiResponse) => {
    if (NextApiRequest !== 'POST') {
        return NextApiResponse.status(405).json({message: 'Method not allowed'});
    }

    const userData = JSON.parse(NextApiRequest.body);

    const savedData = await Prisma.UserInfo.create({
        data: userData

    })

    NextApiResponse.json(savedData);
}*/
