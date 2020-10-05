import React from 'react';
import './style.scss';
import { Row, Col, Card } from 'antd';
import { GlobalOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { avt, cardBlogWomanPush } from '../../assets/images';
import { dataCardBlog } from '../../api/Data';

const { Meta } = Card;
const ListCard = ({ image, alt, title, description }) => (
    <Card
        style={({ width: '100%' }, { padding: '30px' })}
        cover={<img alt={alt} src={image} />}
        actions={[
            <GlobalOutlined label="Long Name Here" key="global" />,
            <ClockCircleOutlined label="1h ago" key="edit" />,
        ]}
    >
        <Meta title={title} description={description} />
    </Card>
);
console.log('List card', ListCard);
console.log('dataCardBlog', dataCardBlog);
const ran = (max) => Math.floor(Math.random() * Math.floor(max));
export default class RecentBlog extends React.Component {
    state = {
        listCards: [],
    };

    componentDidMount() {
        this.randomCard();
    }

    randomCard = () => {
        let number = ran(dataCardBlog.length - 2);
        let newArray = [];

        for (let i = number; i < number + 3; i++) {
            newArray.push(dataCardBlog[i]);
        }
        this.setState({ listCards: newArray });
    };

    render() {
        return (
            <div className="recent-blog">
                <div className="container">
                    <div className="title">
                        <h2>Recent Blog </h2>
                        <div className="line"></div>
                    </div>
                    <Row gutter={16}>
                        <Col xs={24} md={24} lg={8} className="gutter-row card-left" span={8}>
                            {dataCardBlog.slice(0, 2).map((e, i) => (
                                <ListCard
                                    key={i}
                                    to={e.to}
                                    alt={e.alt}
                                    src={e.image}
                                    title={e.title}
                                    description={e.description}
                                />
                            ))}
                        </Col>
                        <Col xs={24} md={24} lg={16} className="gutter-row card-right" span={16}>
                            <Card
                                style={{ width: '100%' }}
                                cover={<img alt="example" src={cardBlogWomanPush} />}
                            >
                                <div className="content-blog">
                                    <Row>
                                        <Col xs={24} md={12} lg={12}>
                                            <div className="title-card">
                                                21 Top Fitness Blogs You Should Follow in 2020
                                            </div>
                                        </Col>
                                        <Col xs={24} md={12} lg={12}>
                                            <img className="avt" src={avt} alt="avatar" />
                                        </Col>
                                    </Row>
                                    <Row className="txt-blog">
                                        <div className="divide">
                                            <p>
                                                Culpa qui officia deserunt mollit anim id est
                                                laborum. Sed ut perspiciatis unde omnis iste natus
                                                error sit voluptartem accusantium doloremque
                                                laudantium, totam rem aperiam, eaque ipsa quae ab
                                                illo inventore veritatis et quasi ropeior architecto
                                                beatae vitae dicta sunt explicabo. Nemo eniem ipsam
                                                voluptatem quia voluptas sit aspernatur aut odit aut
                                                fugit, sed quia consequuntur magni dolores eosep
                                                quiklop ratione voluptatem sequi nesciunt. Neque
                                                porro quisquam est, quepi dolorem ipsum quia dolor
                                                srit amet, consectetur adipisci velit, seid quia non
                                                numquam eiuris modi tempora incidunt ut labore et
                                                dolore magnam aliquam quaerat iope voluptatem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipisifwcing elit, sed do eiusmod tempor incididunt
                                                ut labore et dolore roipi magna aliqua. Ut enim ad
                                                minim veeniam, quis nostruklad exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in tufpoy
                                                voluptate velit esse cillum dolore eu fugiat nulla
                                                parieratur. Excepteur sint occaecat cupidatat.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipisifwcing elit, sed do eiusmod tempor incididunt
                                                ut labore et dolore roipi magna aliqua. Ut enim ad
                                                minim veeniam, quis nostruklad exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in tufpoy
                                                voluptate velit esse cillum dolore eu fugiat nulla
                                                parieratur. Excepteur sint occaecat cupidatat.
                                            </p>
                                            <div className="line"></div>
                                            <p className="quote">
                                                “Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id
                                                est laborum. Sed ut perspiciatis unde omnis iste
                                                natus error sit voluptatem.”
                                            </p>
                                        </div>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
