// Alias Module for Box2D Classes
var box2d;
(function (box2d) {
    box2d.b2Vec2 = Box2D.Common.Math.b2Vec2;
    box2d.b2BodyDef = Box2D.Dynamics.b2BodyDef;
    box2d.b2Body = Box2D.Dynamics.b2Body;
    box2d.b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    box2d.b2Fixture = Box2D.Dynamics.b2Fixture;
    box2d.b2World = Box2D.Dynamics.b2World;
    box2d.b2MassData = Box2D.Collision.Shapes.b2MassData;
    box2d.b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    box2d.b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
    box2d.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
})(box2d || (box2d = {}));
//# sourceMappingURL=box2d.js.map
