module.exports = function (CryptoDoggies, accounts) {
    function checkDoggyCreation(age, name, dna) {
        it('create should be a doggy named ' + name, function(done){
            CryptoDoggies.deployed().then(async function(instance){
                await instance.create(age, name, dna, {
                    from: accounts[0]
                }).then(
                    function (result) {
                        assert.include(result.logs[0].event, 'DoggyCreated', 'DoggyCreatedEvent was not triggered');
                    }
                );
            }).then(done).catch(done);
        });

        return {
            checkDoggyCreation: checkDoggyCreation
        }
    }
}