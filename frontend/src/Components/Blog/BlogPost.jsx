import { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { PostEdit, Post, Discard } from '../../Constant';
import { Breadcrumbs, Btn } from '../../AbstractElements';
import FormPost from './BlogPost/FormPost';

import HeadingCommon from '../../Common/Component/HeadingCommon';

const BlogPostContain = () => {
  const handlePostSuccess = () => {
    alert('Publication ajoutée avec succès !');
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Add Post" parent="Blog" title="Add Post" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon CardHeaderClassName="pb-0" Heading={PostEdit} />
              <CardBody className="add-post">
                <FormPost onPostSuccess={handlePostSuccess} />
                
                <div className="btn-showcase">
                  <Btn attrBtn={{ color: 'primary', type: 'submit', form: 'form-post' }}>
                    {Post}
                  </Btn>
                  <Btn attrBtn={{ color: 'light', type: 'reset', form: 'form-post' }}>
                    {Discard}
                  </Btn>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BlogPostContain;