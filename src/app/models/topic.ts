export class ITopic{
    topicName: string;
    images: [
        {
            _id: string;
            source: string;
            description: string;
            author: {
                _id: string;
                avatar: string;
                username: string;
            }
            createdAt: string;
            updateAt: string;
        }
    ];
}
